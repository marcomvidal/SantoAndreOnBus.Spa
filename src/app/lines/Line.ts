import { Company } from '../companies/Company';

export class Line {
    id?: number;
    letter: string;
    number: string;
    fromwards: string;
    towards: string;
    peakHeadway: number;
    companyId?: number;
    company: Company;

    constructor(letter: string, number: string, fromwards: string, towards: string,
                peakHeadway: number, company: Company, id?: number, companyId?: number) {
        this.letter = letter;
        this.number = number;
        this.fromwards = fromwards;
        this.towards = towards;
        this.peakHeadway = peakHeadway;
        this.company = company;

        if (id != undefined) { this.id = id; }
        if (companyId != undefined) { this.companyId = companyId; }
    }
}