export class Vehicle {
    id?: number;
    name: string;

    constructor(name: string, id?: number) {
        this.name = name;

        if (id != undefined) { this.id = id; }
    }
}