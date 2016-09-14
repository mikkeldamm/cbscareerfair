import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { StateService, StoreService, Company as CompanyModel } from '../store';

@Component({
    selector: 'company',
    styleUrls: ['./company.style.scss'],
    templateUrl: './company.template.html'
})
export class Company {

    private _subscription: Subscription;

    company: CompanyModel;
    currentDay: number = 5;

    constructor(private _route: ActivatedRoute, private _state: StateService, private _store: StoreService) {

    }

    ngOnInit() {

        this._subscription = this._route
            .params
            .map(params => params['name'].toLowerCase())
            .map((name) => {

                var data = this._store.day1.concat(this._store.day2);
                if (this._state.currentDay === 1) {
                    data = this._store.day1;
                    this.currentDay = 5;
                } else if (this._state.currentDay === 2) {
                    data = this._store.day2;
                    this.currentDay = 6;
                }
                    
                return data.filter((company) => {
                    return company.name.toLowerCase() === name;
                });
            })
            .map(companies => {
                return (companies.length > 0) ? companies[0] : null;
            })
            .subscribe(company => {

                if (company) {
                    this.company = company;
                }
            });
    }

    ngOnDestroy() {

        this._subscription.unsubscribe();
    }

    getCompanyPositions(company: CompanyModel) {

        return this._store
            .positions
            .filter(item => {
                return company.positions.indexOf(item.index) > -1;
            })
            .map(item => item.title)
            .join(',');
    }

    getCompanyProfiles(company: CompanyModel) {
        
        return this._store
            .profiles
            .filter(item => {
                return company.profiles.indexOf(item.index) > -1;
            })
            .map(item => item.title)
            .join(', ');
    }
}