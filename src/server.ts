import express from 'express';
import { Request, Response } from 'express';
import { getObjects as getPersons } from './supplier/supplyObject';

const app = express();


app.use(express.static('public'))
app.get('/test', (req: Request, res: Response) => {
    res.json(getPersons());

})

app.listen(3000, () => {
    console.log('server started');

})