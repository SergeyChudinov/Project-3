export default class Download {
    constructor(triggers) {
        this.btns = document.querySelectorAll(triggers);
        this.path = 'assets/img/mainbg.jpg';
    }

    downloadItem(path) {
        const elemement = document.createElement('a');
        elemement.setAttribute('href', path);
        elemement.setAttribute('download', 'nice_picture');
        elemement.style.display = 'none';
        document.body.appendChild(elemement);

        elemement.click();
        document.body.removeChild(elemement);
    }


    init() {
        this.btns.forEach(btn => {
            btn.addEventListener('click', () => {
                this.downloadItem(this.path);
            });
        });
    }
}