import { Component } from '@angular/core';

import { StateService, StoreService, Item } from '../store';

@Component({
    selector: 'profiles',
    styleUrls: ['./profiles.style.scss'],
    templateUrl: './profiles.template.html'
})
export class Profiles {

    profiles: Item[];

    constructor(private _state: StateService, private _store: StoreService) {

    }

    ngOnInit() {

        this.profiles = this._store.profiles;
    }

    onProfileClicked(profile: Item) {

        profile.selected = !profile.selected;

        if (profile.selected) {
            this._state.addProfile(profile);
        } else {
            this._state.removeProfile(profile);
        }
    }
}