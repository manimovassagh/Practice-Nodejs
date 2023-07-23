import { NextFunction } from 'express';
import express from 'express';
import { Express, Request, Response } from 'express';
import { PORT } from './config/Port';
import { sayHiFromMiddleWare } from './middleware/Hi';

const app: Express = express();


app.use(express.static('public'))
app.use(sayHiFromMiddleWare)
app.get('/test', (_req: Request, res: Response) => {
    res.json({
        name: 'John',
    });

})
app.get('/user', sayHiFromMiddleWare, (_req: Request, res: Response, next: NextFunction) => {
    res.json({
        name: 'John',
    });

})

app.listen(PORT, () => {
    console.log(`Server Startted on port ${PORT}`);

})