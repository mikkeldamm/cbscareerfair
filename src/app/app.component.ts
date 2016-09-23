import { Component, ViewEncapsulation } from '@angular/core';

import { StateService } from './store';

@Component({
    selector: 'cbs-app',
    encapsulation: ViewEncapsulation.None,
    styleUrls: [ './app.style.scss' ],
    templateUrl: './app.template.html'
})
export class App {

    isFront: boolean = true;

    constructor(private _state: StateService) {

    }

    ngOnInit() {

        this._state.isFront.subscribe((isFront) => {

            this.isFront = isFront;
        });
    }
}
