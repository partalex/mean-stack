export class Notification {
  _id: string;
  patientId: string;
  seen: boolean;
  date: Date;
  name: string;
  description: string;
  constructor(patientId: string, seen: boolean, name: string, description: string) {
    this.patientId = patientId;
    this.seen = seen;
    this.name = name;
    this.description = description;
  }
}



