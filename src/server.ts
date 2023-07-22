const express = require('express');


const app = express();


app.use(express.static('public'))
app.get('/test', (req, res) => {
    res.json({
        name: 'John',
    });

})
app.get('/user', (req, res) => {
    res.json({
        name: 'John',
    });

})

app.listen(8080, () => {
    console.log('server started');

})