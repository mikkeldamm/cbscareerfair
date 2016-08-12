import { Component, Input, Output, EventEmitter } from '@angular/core';

import { StoreService, StateService } from '../../../store';

@Component({
    selector: 'cbs-companies',
    styles: [ require('./companies.scss') ],
    template: require('./companies.html')
})
export class Companies {

    @Output() onBack = new EventEmitter();

    companies: string[] = [];

    constructor(private _store: StoreService, private _state: StateService) {

        this._state.selected.subscribe((selected) => {

            this.filterCompanies(selected.position.index, selected.profile.index);
        });
    }

    private filterCompanies(positionIndex: number, profileIndex: number) {

        this.companies = this._store.companies
            .filter((company) => {
                return company.positions.indexOf(positionIndex) > -1 && company.profiles.indexOf(profileIndex) > -1;
            })
            .map(company => { 
                return company.name; 
            });
    }
}