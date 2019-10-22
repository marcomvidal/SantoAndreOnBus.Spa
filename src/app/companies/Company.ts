import { Prefix } from './Prefix';

export class Company {
    id?: number;
    name: string;
    prefixes: Prefix[];

    constructor(id?: number, name?: string, prefixes?: Prefix[]) {
        this.id = id;
        this.name = name;
        this.prefixes = prefixes != undefined ? prefixes : new Array<Prefix>();
    }
}