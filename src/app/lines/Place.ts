export class Place {
    id?: number;
    name: string;
    lineId?: number;

    constructor(name: string, id?: number, lineId?: number) {
        this.name = name;
        this.id = id;
        this.lineId = lineId;
    }
}