export class Dashboard {
    companies: number;
    lines: number;
    vehicles: number;

    constructor(companies?: number, lines?: number, vehicles?: number) {
        this.companies = companies;
        this.lines = lines;
        this.vehicles = vehicles;
    }
}