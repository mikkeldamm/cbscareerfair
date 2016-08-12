export class StoreService {
    
    positions: string[];
    profiles: string[];
    companies: Companies[];

    constructor() {

        let data = require('./data.json');

        this.positions = data.positions;
        this.profiles = data.profiles;
        this.companies = data.companies;
    }
}

interface Companies {
    name: string;
    positions: number[];
    profiles: number[];
}