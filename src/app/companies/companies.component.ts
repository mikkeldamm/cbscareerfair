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

            var data: Company[] = [<Company>{ name: "Oct. 5", cutter: true, positions: [], profiles: [] }]
                .concat(this._store.day1, [{ name: "Oct. 6", cutter: true, positions: [], profiles: [] }], this._store.day2);

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

    getSelectedPositions() {

        return this._state
            .positionsList
            .map(i => i.title)
            .join(', ')
    }

    getSelectedProfiles() {

        return this._state
            .positionsList
            .map(i => i.title)
            .join(', ')
    }

    private doesCompanyContainPosition(company: Company) {

        return this._state
            .positionsList
            .filter(item => {
                return company.positions && (company.positions.length === 0 || company.positions.indexOf(item.index)) > -1;
            })
            .length > 0;
    }

    private doesCompanyContainProfile(company: Company) {

        return this._state
            .profilesList
            .filter(item => {
                return company.profiles && (company.profiles.length === 0 || company.profiles.indexOf(item.index)) > -1;
            })
            .length > 0;
    }
}