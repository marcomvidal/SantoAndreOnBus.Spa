export class Prefix {

    id?: number;
    number: string;
    companyId?: number;

    constructor(number: string, id?: number, companyId?: number) {
        this.number = number;

        if (id != undefined) { this.id = id; }
        if (companyId != undefined) { this.companyId = companyId; }
    }
}