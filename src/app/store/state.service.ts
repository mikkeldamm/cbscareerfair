import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { StoreService, Item } from './store.service';

@Injectable()
export class StateService {
    
    positionsList: Item[] = [];
    profilesList: Item[] = [];

    // TODO: set this as the current day (oct 5 or 6)
    // TODO: change this var when other date is selected
    currentDay: number = 1;

    positions: BehaviorSubject<Item[]>;
    profiles: BehaviorSubject<Item[]>;

    isFront: BehaviorSubject<boolean>;

    constructor(store: StoreService) {

        this.positions = new BehaviorSubject<Item[]>([]);
        this.profiles = new BehaviorSubject<Item[]>([]);
        this.isFront = new BehaviorSubject<boolean>(true);

        this.positions.subscribe(positions => {
            this.positionsList = positions;
        });

        this.profiles.subscribe(profiles => {
            this.profilesList = profiles;
        });
    }

    clear() {

        this.positions.next([]);
        this.profiles.next([]);
    }

    anySelected() {
        return this.anyPositionsSelected() && this.anyProfilesSelected();
    }

    anyPositionsSelected() {
        return this.positionsList.length > -1;
    }

    anyProfilesSelected() {
        return this.profilesList.length > -1;
    }

    addPosition(item: Item) {
        this.positions.next(this.positionsList.concat([item]));
    }

    removePosition(item: Item) {
        this.positions.next(this.positionsList.filter(i => i.index !== item.index));
    }

    addProfile(item: Item) {
        this.profiles.next(this.profilesList.concat([item]));
    }

    removeProfile(item: Item) {
        this.profiles.next(this.profilesList.filter(i => i.index !== item.index));
    }

    setFront(isFront: boolean) {
        this.isFront.next(isFront);
    }
}