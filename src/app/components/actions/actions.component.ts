import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

import { Item } from '../../../store';

@Component({
    selector: 'cbs-actions',
    styles: [ require('./actions.scss') ],
    template: require('./actions.html')
})
export class Actions {

    @Input() position: Observable<Item>;
    @Input() profile: Observable<Item>;

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