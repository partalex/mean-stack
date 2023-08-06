import express from 'express';

export class PatientController {
    index = (req: express.Request, res: express.Response) => {
        console.log("/patient/index");
    };

}
