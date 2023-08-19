export class Doctor {
    _id: string;
    firstname: string;
    lastname: string;
    username: string;
    password: string;
    phone: string;
    approved: boolean;
    address: string;
    mail: string;
    image: string;
    licenceId: string;
    specialization: string;
    medicineBranch: string;

    constructor(firstname: string, lastname: string, username: string, password: string, phone: string, approved: boolean, address: string, mail: string, image: string, licenceId: string, specialization: string, medicineBranch: string) {
        this._id = username;
        this.firstname = firstname;
        this.lastname = lastname;
        this.username = username;
        this.password = password;
        this.phone = phone;
        this.approved = approved;
        this.address = address;
        this.mail = mail;
        this.image = image;
        this.licenceId = licenceId;
        this.specialization = specialization;
        this.medicineBranch = medicineBranch;
    }

}
