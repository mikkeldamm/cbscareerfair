import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizationService } from '@angular/platform-browser';

import { StoreService, StateService, Company } from '../../../store';

@Component({
    selector: 'cbs-companies',
    styles: [ require('./companies.scss') ],
    template: require('./companies.html')
})
export class Companies {

    @Output() onBack = new EventEmitter();

    companies: Company[] = [];

    constructor(private _store: StoreService, private _state: StateService, private _sanitizer: DomSanitizationService) {

        this._state.selected.subscribe((selected) => {

            this.filterCompanies(selected.position.index, selected.profile.index);
        });
    }

    goBack() {

        this._state.clear();
        this.onBack.emit({});
    }

    getCompanyStyle(company: Company) {

        let styles = [];

        if (company.background) styles.push(`background-color: ${company.background};`);
        if (company.color) styles.push(`color: ${company.color};`);

        return this._sanitizer.bypassSecurityTrustStyle(styles.join(" "));
    }

    private filterCompanies(positionIndex: number, profileIndex: number) {

        this.companies = this._store.companies
            .filter((company) => {
                return company.positions.indexOf(positionIndex) > -1 && company.profiles.indexOf(profileIndex) > -1;
            });
    }
}