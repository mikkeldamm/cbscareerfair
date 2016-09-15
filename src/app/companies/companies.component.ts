import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject  } from 'rxjs/BehaviorSubject';

import { StateService, StoreService, Item, Company } from '../store';

@Component({
    selector: 'companies',
    styleUrls: ['./companies.style.scss'],
    templateUrl: './companies.template.html'
})
export class Companies implements OnInit {

    filter$: BehaviorSubject<number>;

    positions: Item[] = [];
    profiles: Item[] = [];
    companies: Company[];

    constructor(private _state: StateService, private _store: StoreService) {

        this.filter$ = new BehaviorSubject<number>(0);
    }

    ngOnInit() {

        this.filter$.subscribe((day) => {

            var data = this._store.day1.concat(this._store.day2);
            if (day === 1) {
                data = this._store.day1;
            } else if (day === 2) {
                data = this._store.day2;
            }

            this.companies = data.filter(company => {
                return this.doesCompanyContainPosition(company) && this.doesCompanyContainProfile(company);
            });
        });
    }

    getSelections() {

        return this._state
            .positionsList
            .concat(this._state.profilesList)
            .map(i => i.title)
            .join(', ')
    }

    private doesCompanyContainPosition(company: Company) {

        return this._state
            .positionsList
            .filter(item => {
                return company.positions.indexOf(item.index) > -1;
            })
            .length > 0;
    }

    private doesCompanyContainProfile(company: Company) {

        return this._state
            .profilesList
            .filter(item => {
                return company.profiles.indexOf(item.index) > -1;
            })
            .length > 0;
    }
}