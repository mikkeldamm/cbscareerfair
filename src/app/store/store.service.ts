export class StoreService {
    
    positions: Item[] = [];
    profiles: Item[] = [];
    day1: Company[] = [];
    day2: Company[] = [];

    constructor() {

        let data = require('./data.json');

        for (let pos in data.positions) {
            this.positions.push({ index: Number(pos), title: data.positions[pos].toString() });
        }

        for (let pro in data.profiles) {
            this.profiles.push({ index: Number(pro), title: data.profiles[pro].toString() });
        }

        this.day1 = data.companies.day1.sort((a, b) => { 
            var textA = a.name.toUpperCase();
            var textB = b.name.toUpperCase();
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
         });
         
        this.day2 = data.companies.day2.sort((a, b) => { 
            var textA = a.name.toUpperCase();
            var textB = b.name.toUpperCase();
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
         });
    }
}

export interface Item {
    index: number;
    title: string;
    selected?: boolean;
}

export interface Company {
    name: string;
    hall?: string;
    stall?: number;
    positions?: number[];
    profiles?: number[];
    presentation?: string;
    cutter?: boolean;
}