import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'cbs-select',
    styles: [ require('./select.scss') ],
    template: require('./select.html')
})
export class Select {

    @Input() items: string[] = [];

    @Output() onBack = new EventEmitter();
    @Output() onItemSelected = new EventEmitter<SelectItem>();

    constructor() {

        
    }

    selectItem(title, index) {

        this.onItemSelected.emit({ title: title, index: index});
    }

    goBack() {

        this.onBack.emit({});
    }
}

export interface SelectItem {
    title: string;
    index: number;
}