import express from 'express';
import { Express,Request, Response} from 'express';



const app:Express = express();


app.use(express.static('public'))
app.get('/test', (req:Request, res:Response) => {
    res.json({
        name: 'John',
    });

})
app.get('/user', (req:Request, res:Response) => {
    res.json({
        name: 'John',
    });

})

app.listen(8080, () => {
    console.log('server started');

})