import { Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';

import { Title, Actions, Select, SelectItem, Companies } from './components';

import { StoreService, StateService } from '../store';

@Component({
    selector: 'cbs-app',
    encapsulation: ViewEncapsulation.None,
    styles: [ require('./app.scss') ],
    template: require('./app.html'),
    directives: [ Title, Actions, Select, Companies ]
})
export class App {

    selectItems: string[] = [];
    action: Action;

    hideActions: boolean = false;
    hideSelect: boolean = true;
    hideCompanies: boolean = true;

    constructor(private _store: StoreService, private _state: StateService) {

        Observable
            .forkJoin(this._state.position, this._state.profile)
            .subscribe(items => {

                this._state.setSelected(items[0], items[1]);
                this.showCompanies();
            });
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

    backToMain() {

        this.hideActions = false;
        this.hideSelect = true;
        this.hideCompanies = true;
    }

    selectItemSelected(item: SelectItem) {

        if (this.action === Action.position) this._state.setPosition(item);
        if (this.action === Action.profile) this._state.setProfile(item);

        this.hideActions = false;
        this.hideSelect = true;
    }

    showCompanies() {

        this.hideCompanies = false;
        this.hideActions = true;
        this.hideSelect = true;
    }
}

enum Action {
    none = 0,
    position = 1,
    profile = 2
}