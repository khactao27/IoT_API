const express = require('express');
const bodyParser = require('body-parser');
const routerAPI = require('./routes/api.route');

const app = express();
const port = process.env.port || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/api', routerAPI);

app.listen(port, ()=>{
    console.log(`IoT API is running at http:/localhost:${port}`);
});