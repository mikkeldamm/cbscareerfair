import { Component, OnInit } from '@angular/core';
import { BehaviorSubject  } from 'rxjs/BehaviorSubject';

import { StateService, StoreService } from '../store';

@Component({
    selector: 'companies',
    styleUrls: ['./companies.style.scss'],
    templateUrl: './companies.template.html'
})
export class Companies implements OnInit {

    filter$: BehaviorSubject<number>;

    constructor(private _state: StateService, private _store: StoreService) {

        this.filter$ = new BehaviorSubject<number>(0);
    }

    ngOnInit() {

        this.filter$.subscribe((index) => {

            console.log(index);
        });
    }
}