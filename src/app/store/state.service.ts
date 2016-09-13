import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { StoreService } from './store.service';

@Injectable()
export class StateService {
    
    position: Subject<Item>;
    profile: Subject<Item>;
    selected: Subject<Selected>;

    constructor(store: StoreService) {

        this.position = new Subject<Item>();
        this.profile = new Subject<Item>();
        this.selected = new Subject<Selected>();
    }

    clear() {

        this.position.next(null);
        this.profile.next(null);
    }

    setSelected(position: Item, profile: Item) {
        this.selected.next({ position: position, profile: profile });
    }

    setPosition(item: Item) {
        this.position.next(item);
    }

    setProfile(item: Item) {
        this.profile.next(item);
    }
}

export interface Item {
    title: string;
    index: number;
}

export interface Selected {
    position: Item;
    profile: Item;
}