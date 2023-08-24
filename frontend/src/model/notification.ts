export class Notification {
    _id: string;
    seenByPatients: Array<string>;
    active: boolean;
    date: Date;
    name: string;
    description: string;

    constructor(name: string, description: string, active: boolean = true) {
        this.seenByPatients = [];
        this.name = name;
        this.description = description;
        this.active = active;
    }
}



