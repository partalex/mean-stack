export class Report {
  _id: string;
  appointmentId: string;
  name: string;
  description: string;
  date: Date;

  // generate constructor
  constructor(appointmentId: string, name: string, description: string) {
    this.appointmentId = appointmentId;
    this.name = name;
    this.description = description;
  }

}



