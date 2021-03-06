import { Component } from '@angular/core';

import { StateService } from '../store';

@Component({
    selector: 'home',
    styleUrls: ['./home.style.scss'],
    templateUrl: './home.template.html'
})
export class Home {

    constructor(public _state: StateService) {

    }

    ngOnInit() {

        this._state.setFront(true);
        this._state.clear();
    }
}