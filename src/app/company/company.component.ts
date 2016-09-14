import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { StateService } from '../store';

@Component({
    selector: 'company',
    styleUrls: ['./company.style.scss'],
    templateUrl: './company.template.html'
})
export class Company {

    private _sub: Subscription;

    constructor(private _route: ActivatedRoute, private _state: StateService) {

    }

    ngOnInit() {

        this._sub = this._route.params.subscribe(params => {
            console.log(params);
        });
    }

    ngOnDestroy() {
        
        this._sub.unsubscribe();
    }
}