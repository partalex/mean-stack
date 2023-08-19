export class Patient {
  _id: string = ""
  firstname: string = ""
  lastname: string = ""
  username: string = ""
  password: string = ""
  approved: boolean = false
  address: string = ""
  phone: string = ""
  mail: string = ""
  image: string = ""

// generate ctor
  constructor(
    firstname: string,
    lastname: string,
    username: string,
    password: string,
    approved: boolean,
    address: string,
    phone: string,
    mail: string,
    image: string
  ) {
    this._id = username
    this.firstname = firstname
    this.lastname = lastname
    this.username = username
    this.password = password
    this.approved = approved
    this.address = address
    this.phone = phone
    this.mail = mail
    this.image = image
  }
}
