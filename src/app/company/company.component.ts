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
    mapPosition: number = 0;

    constructor(private _route: ActivatedRoute, private _state: StateService, private _store: StoreService) {

    }

    ngOnInit() {

        this._subscription = this._route
            .params
            .map(params => params['name'].toLowerCase())
            .map((name) => {

                var data = this._store.day1.concat(this._store.day2);

                return data.filter((company) => {
                    return company.name.replace('*','').toLowerCase() === name;
                });
            })
            .map(companies => {
                return (companies.length > 0) ? companies[0] : null;
            })
            .subscribe(company => {

                console.log(company);

                if (company) {

                    this.company = company;
                    this.mapPosition = this.getMapPosition(company);
                }
            });
    }

    ngOnDestroy() {

        this._subscription.unsubscribe();
    }

    getCompanyPositions(company: CompanyModel) {

        if (!company)
            return "";

        return this._store
            .positions
            .filter(item => {
                return company.positions.indexOf(item.index) > -1;
            })
            .map(item => item.title)
            .join(', ');
    }

    getCompanyProfiles(company: CompanyModel) {

        if (!company)
            return "";

        return this._store
            .profiles
            .filter(item => {
                return company.profiles.indexOf(item.index) > -1;
            })
            .map(item => item.title)
            .join(', ');
    }

    getMapPosition(company: CompanyModel) {

        if (company.hall.toLowerCase() === 'a')
            return ((1104 - window.innerWidth) / 2) * 2;
        if (company.hall.toLowerCase() === 'b')
            return (1104 - window.innerWidth) / 2;
        if (company.hall.toLowerCase() === 'c')
            return ((1104 - window.innerWidth) / 2) / 2;

        return 0;
    }
}