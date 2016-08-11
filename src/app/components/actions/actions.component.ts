import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'cbs-actions',
    styles: [ require('./actions.scss') ],
    template: require('./actions.html')
})
export class Actions {

    @Input() position: string;
    @Input() profile: string;

    @Output() onSelectPosition = new EventEmitter();
    @Output() onSelectProfile = new EventEmitter();

    constructor() {

    }

    positionClicked(e) {
        this.onSelectPosition.emit({});
    }

    profileClicked(e) {
        this.onSelectProfile.emit({});
    }
}