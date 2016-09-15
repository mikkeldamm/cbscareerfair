import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { StoreService, StateService, Item } from '../store';

@Component({
    selector: 'positions',
    styleUrls: ['./positions.style.scss'],
    templateUrl: './positions.template.html'
})
export class Positions implements OnInit {

    positions: Item[];

    constructor(private _state: StateService, private _store: StoreService, private _router: Router) {

    }

    ngOnInit() {

        this.positions = this._store.positions;
    }

    onPositionClicked(position: Item) {

        position.selected = !position.selected;

        if (position.selected) {
            this._state.addPosition(position);
        } else {
            this._state.removePosition(position);
        }
    }

    onNextClicked() {

        if (this._state.positionsList.length <= 0) {

            this.positions.forEach(position => {

                position.selected = true;

                this._state.addPosition(position);
            });
        }

        this._router.navigate(['/profiles']);
    }
}