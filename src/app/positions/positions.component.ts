import { Component, OnInit } from '@angular/core';

import { StoreService, StateService, Item } from '../store';

@Component({
    selector: 'positions',
    styleUrls: ['./positions.style.scss'],
    templateUrl: './positions.template.html'
})
export class Positions implements OnInit {

    positions: Item[];

    constructor(private _state: StateService, private _store: StoreService) {

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
}