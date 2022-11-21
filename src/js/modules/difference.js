export default class Diffeence {
    constructor(oldOfficer, newOfficer, items) {
        this.oldOfficer = document.querySelector(oldOfficer);
        this.newOfficer = document.querySelector(newOfficer);
        try {
            this.oldItems = this.oldOfficer.querySelectorAll(items);
            this.newItems = this.newOfficer.querySelectorAll(items);
        } catch(e) {}
        this.oldCounter = 0;
        this.newCounter = 0;
    }

    bindTriggers(container, items, counter) {
        container.querySelector('.plus').addEventListener('click', () => {
            if (counter < items.length - 2) {
                items[counter].classList.add('slideInUp');
                items[counter++].style.display = 'flex';
            } else if (counter < items.length - 1) {
                items[counter].classList.add('slideInUp');
                items[counter++].style.display = 'flex';
                items[counter].style.display = 'none';
            }
        });
    }

    hideItems(items) {
        items.forEach((item, i, arr) => {
            if (i !== arr.length - 1) {
                item.style.display = 'none';
                item.classList.add('animated');
            }
        });
    }

    // bindTriggers() {
    //     this.oldOfficer.querySelector('.plus').addEventListener('click', () => {
    //         if (this.oldCounter < this.oldItems.length - 2) {
    //             this.oldItems[this.oldCounter].classList.add('slideInUp');
    //             this.oldItems[this.oldCounter++].style.display = 'flex';
    //         } else if (this.oldCounter < this.oldItems.length - 1) {
    //             this.oldItems[this.oldCounter].classList.add('slideInUp');
    //             this.oldItems[this.oldCounter++].style.display = 'flex';
    //             this.oldItems[this.oldCounter].style.display = 'none';
    //         }
    //     });

    //     this.newOfficer.querySelector('.plus').addEventListener('click', () => {
    //         if (this.newCounter < this.newItems.length - 2) {
    //             this.newItems[this.newCounter].classList.add('slideInUp');
    //             this.newItems[this.newCounter++].style.display = 'flex';
    //         } else if (this.newCounter < this.newItems.length - 1) {
    //             this.newItems[this.newCounter].classList.add('slideInUp');
    //             this.newItems[this.newCounter++].style.display = 'flex';
    //             this.newItems[this.newCounter].style.display = 'none';
    //         }
    //     });
    // }

    // hideItems() {
    //     this.oldItems.forEach((item, i, arr) => {
    //         if (i !== arr.length - 1) {
    //             item.style.display = 'none';
    //             item.classList.add('animated');
    //         }
    //     });

    //     this.newItems.forEach((item, i, arr) => {
    //         if (i !== arr.length - 1) {
    //             item.style.display = 'none';
    //             item.classList.add('animated');
    //         }
    //     });
    // }

    init() {
        try {
            // this.hideItems();
            this.hideItems(this.oldItems);
            this.hideItems(this.newItems);
        
            // this.bindTriggers();
            this.bindTriggers(this.oldOfficer, this.oldItems, this.oldCounter);
            this.bindTriggers(this.newOfficer, this.newItems, this.newCounter);
        } catch(e) {}
    }
}