import { Prefix } from './Prefix';

export class Company {
    id?: number;
    name: string;
    prefixes: Prefix[];

    constructor(name: string, prefixes: Prefix[], id?: number) {
        this.name = name;
        this.prefixes = prefixes;

        if (id != undefined) { this.id = id; }
    }
}