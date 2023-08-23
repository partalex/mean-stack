export class Appointment {
  _id: string;
  appointmentType: string;
  doctorId: string;
  patientId: string;
  reason: string;
  reasonForCanceling: string;
  canceled: boolean;
  date: Date;

  constructor(_id: string, appointmentType: string, doctorId: string, patientId: string, reason: string, date: Date, canceled: boolean, reasonForCanceling: string) {
    this._id = _id;
    this.appointmentType = appointmentType;
    this.doctorId = doctorId;
    this.patientId = patientId;
    this.reason = reason;
    this.date = date;
    this.canceled = canceled;
    this.reasonForCanceling = reasonForCanceling;
  }
}
