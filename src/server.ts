import express from 'express';
import { Express, Request, Response } from 'express';

const app: Express = express();


app.use(express.static('public'))
app.get('/test', (_req: Request, res: Response) => {
    res.json({
        name: 'John',
    });

})
app.get('/user', (_req: Request, res: Response) => {
    res.json({
        name: 'John',
    });

})

app.listen(8080, () => {
    console.log('server started');

})