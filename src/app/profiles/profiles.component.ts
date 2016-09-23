import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { StateService, StoreService, Item } from '../store';

@Component({
    selector: 'profiles',
    styleUrls: ['./profiles.style.scss'],
    templateUrl: './profiles.template.html'
})
export class Profiles {

    profiles: Item[];

    constructor(private _state: StateService, private _store: StoreService, private _router: Router) {

    }

    ngOnInit() {

        this._state.setFront(false);
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

    onNextClicked() {

        if (this._state.profilesList.length <= 0) {

            this.profiles.forEach(profile => {

                profile.selected = true;

                this._state.addProfile(profile);
            });
        }

        this._router.navigate(['/companies']);
    }
}