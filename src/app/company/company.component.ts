import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { StateService, StoreService } from '../store';

@Component({
    selector: 'company',
    styleUrls: ['./company.style.scss'],
    templateUrl: './company.template.html'
})
export class Company {

    private _subscription: Subscription;

    constructor(private _route: ActivatedRoute, private _state: StateService, private _store: StoreService) {

    }

    ngOnInit() {

        this._subscription = this._route
            .params
            .map(params => params['name'].toLowerCase())
            .flatMap((name) => {

                return this._store
                    .companies
                    .filter((company) => {

                        return company.name.toLowerCase() === name;
                    });
            })
            .subscribe(company => {

                console.log(company);
            });
    }

    ngOnDestroy() {

        this._subscription.unsubscribe();
    }
}