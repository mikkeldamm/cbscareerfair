import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { StateService } from '../store'; 

@Injectable()
export class CompaniesGuard implements CanActivate {

    constructor(private _state: StateService, private _router: Router) {

    }

    canActivate() {

        let shouldContinue = this._state.positionsList.length > 0 && this._state.profilesList.length > 0;
        if (shouldContinue)
            return true;

        this._router.navigate(['/positions']);

        return false;
    }
}