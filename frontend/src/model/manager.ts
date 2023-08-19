export class Manager {
    _id: string;
    firstname: string;
    lastname: string;
    username: string;
    password: string;
    image: string;
// generate ctor
    constructor(_id: string, firstname: string, lastname: string, username: string, password: string, image: string) {
        this._id = _id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.username = username;
        this.password = password;
        this.image = image;
    }
}
