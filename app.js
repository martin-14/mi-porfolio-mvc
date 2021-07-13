const express = require('express');
const app = express();
const port = 3000;


const mainRouter = require('./routers/main');
const aboutRouter = require('./routers/about');

app.use(express.static('public'));

app.get('/', mainRouter);
app.get('/about', aboutRouter);

app.listen(port, () =>{
    console.log(`Server running in http://localhost:${port}`);
});

