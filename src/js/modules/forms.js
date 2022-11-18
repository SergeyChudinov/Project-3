export default class Form {
    constructor(forms) {
        this.forms = document.querySelectorAll(forms);
        this.inputs = document.querySelectorAll('input');
        this.selects = document.querySelectorAll('select');
        this.message = {
            loading: 'Загрузка',
            success: 'Спасибо! Мы с вами саяжемся!',
            failure: 'Что-то пошло не так...'
        }
        this.path = 'http://localhost:3000/designer';
    }

    clearInputs() {
        this.inputs.forEach(item => {
            item.value = '';
        });
        this.selects.forEach(el => {
            el.selectedIndex = 0;
        })
    };

    checkMailInputs() {
        const mailInputs = document.querySelectorAll('[name="email"]');
    
        mailInputs.forEach(input => {
            input.addEventListener('keypress', function(e) {
                if (e.key.match(/[а-яё]/ig)) {
                    e.preventDefault();
                }
            });
        });
    };

    initMask() {
        let setCursorPosition = (pos, elem) => {
            elem.focus();
            if (elem.setSelectionRange) {
                elem.setSelectionRange(pos, pos);
            } else if (elem.createTextRange) {
                let range = elem.createTextRange();
                range.collapse(true);
                range.moveEnd('character', pos);
                range.moveStart('character', pos);
                range.select();
            }
        };
    
        function createMask(event) {
            let matrix = '+1 (___) ___ - __';
            let i = 0;
            let def = matrix.replace(/\D/g, '');
            let val = this.value.replace(/\D/g, '');
            if (def.length >= val.length) {
                val = def;
            }
            this.value = matrix.replace(/./g, function(a) {
                return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
            });
    
            if(event.type === 'blur') {
                if (this.value.length == 2) {
                    this.value = '';
                }
            } else {
                setCursorPosition(this.value.length, this);
            }
        }
    
        let inputs = document.querySelectorAll('[name="phone"]');

        inputs.forEach(input => {
            input.addEventListener('input', createMask);
            input.addEventListener('focus', createMask);
            input.addEventListener('blur', createMask);
        })
    }

    async postData(url, data) {
        let res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: data
        });
        return await res.json();
    }

    init() {
        this.checkMailInputs();
        this.initMask();
        this.forms.forEach(form => {
            form.addEventListener('submit', (e) => {
                e.preventDefault();

                let statusMessage = document.createElement('div');
                statusMessage.style.cssText = `
                    margin-top: 15px;
                    font-size: 18px;
                    color: grey;
                `;
                form.parentNode.appendChild(statusMessage);
                statusMessage.textContent = this.message.loading;

                const formData = new FormData(form);
                const json = JSON.stringify(Object.fromEntries(formData.entries()));

                this.postData(this.path, json)
                    .then(res => {
                        statusMessage.textContent = this.message.success;
                    }).catch(() => {
                        statusMessage.textContent = this.message.failure;
                    }).finally(() => {
                        this.clearInputs();
                        setTimeout(() => {
                            statusMessage.remove();
                        }, 5000);
                    })

            });
        });
    }
}