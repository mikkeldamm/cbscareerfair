import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'cbs-select',
    styles: [ require('./select.scss') ],
    template: require('./select.html')
})
export class Select {

    @Input() items: string[] = [];

    @Output() onBack = new EventEmitter();
    @Output() onItemSelected = new EventEmitter<string>();

    constructor() {

    }

    selectItem(title) {

        this.onItemSelected.emit(title);
    }

    goBack() {

        this.onBack.emit({});
    }
}