import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { StoreService } from './store.service';

@Injectable()
export class StateService {
    
    position: Subject<Item>;
    profile: Subject<Item>;
    selected: Subject<Selected>;

    constructor(store: StoreService) {

        this.clear();
    }

    clear() {

        this.position = new Subject<Item>();
        this.profile = new Subject<Item>();
        this.selected = new Subject<Selected>();
    }

    setSelected(position: Item, profile: Item) {
        this.selected.next({ position: position, profile: profile });
    }

    setPosition(item: Item) {
        this.position.next(item);
        this.position.complete();
    }

    setProfile(item: Item) {
        this.profile.next(item);
        this.profile.complete();
    }
}

interface Item {
    title: string;
    index: number;
}

interface Selected {
    position: Item;
    profile: Item;
}