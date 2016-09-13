export class StoreService {
    
    positions: string[];
    profiles: string[];
    companies: Company[];

    constructor() {

        let data = require('./data.json');

        this.positions = data.positions;
        this.profiles = data.profiles;
        this.companies = data.companies;
    }
}

export interface Company {
    name: string;
    url: string;
    positions: number[];
    profiles: number[];
    background: string;
    color: string;
}