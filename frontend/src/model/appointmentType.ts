export class AppointmentType {
    _id: string;
    description: string;
    descriptionStrong: string;
    specialization: string;
    doctors: Array<String>;
    price: number;
    approved: boolean;

    constructor(_id: string, descriptionStrong: string, description: string, specialization: string, doctors: Array<String>, price: number, approved: boolean) {
        this._id = _id;
        this.description = description;
        this.descriptionStrong = descriptionStrong;
        this.specialization = specialization;
        this.doctors = doctors;
        this.price = price;
        this.approved = approved;
    }
}
