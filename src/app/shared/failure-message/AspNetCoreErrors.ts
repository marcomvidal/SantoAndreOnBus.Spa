import { BackEndErrors } from './BackEndErrors';

export class AspNetCoreErrors implements BackEndErrors {
    rawErrors: Object;

    constructor(rawErrors: Object) {
        this.rawErrors = rawErrors;
    }

    parsedErrors() : string[] {
        return Object
            .keys(this.rawErrors)
            .map(key => this.rawErrors[key])
            .reduce<string[]>((accumulator, values) => accumulator.concat(values), []);
    }
}