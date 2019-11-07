import { Company } from './Company';
import { InterestPoint } from './InterestPoint';
import { Place } from './Place';
import { Vehicle } from './Vehicle';

export class Line {
    id?: number;
    letter: string;
    number: string;
    fromwards: string;
    towards: string;
    peakHeadway: number;
    companyId?: number;
    company: Company;
    interestPoints: InterestPoint[];
    places: Place[];
    vehicles: Vehicle[];

    constructor(id?: number, letter?: string, number?: string, fromwards?: string,
        towards?: string, peakHeadway?: number, company?: Company, companyId?: number,
        interestPoints?: InterestPoint[], places?: Place[], vehicles?: Vehicle[]) {
        this.id = id;
        this.letter = letter;
        this.number = number;
        this.fromwards = fromwards;
        this.towards = towards;
        this.peakHeadway = peakHeadway;
        this.company = company;
        this.companyId = companyId;
        this.interestPoints = interestPoints != undefined ? interestPoints : new Array<InterestPoint>();
        this.places = places != undefined ? places : new Array<Place>();
        this.vehicles = vehicles != undefined ? vehicles : new Array<Vehicle>();
    }

    denomination() {
        return this.letter + this.number;
    }
}