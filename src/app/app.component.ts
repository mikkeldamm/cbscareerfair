import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { StoreService, StateService, Item } from './store';

@Component({
    selector: 'cbs-app',
    encapsulation: ViewEncapsulation.None,
    styleUrls: [ './app.style.scss' ],
    templateUrl: './app.template.html'
})
export class App implements OnInit {

    selectItems: string[] = [];
    action: Action;

    componentLoaded: boolean = false;
    hideActions: boolean = false;
    hideSelect: boolean = true;
    hideCompanies: boolean = true;

    constructor(private _store: StoreService, private _state: StateService) {

    }

    ngOnInit() {

        Observable
            .combineLatest(this._state.position, this._state.profile)
            .filter(items => {
                return items[0] && items[1] ? true : false;
            })
            .subscribe(items => {

                this._state.setSelected(<Item>items[0], <Item>items[1]);
            });

        this.componentLoaded = true;
    }

    selectPosition() {

        this.action =  Action.position;
        this.hideActions = true;
        this.hideSelect = false;
        this.selectItems = this._store.positions;
    }

    selectProfile() {

        this.action =  Action.profile;
        this.hideActions = true;
        this.hideSelect = false;
        this.selectItems = this._store.profiles;
    }
}

enum Action {
    none = 0,
    position = 1,
    profile = 2
}