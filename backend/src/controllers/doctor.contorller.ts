import express from 'express';

export class DoctorController {
    index = (req: express.Request, res: express.Response) => {
        console.log("/doctor/index");
    };


}
