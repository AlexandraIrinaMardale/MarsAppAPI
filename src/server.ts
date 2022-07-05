import express from "express";
import axios from "axios";

const app = express();
const port = 8000;

app.use(express.json());

var testRouter = require('./Routes/test');
var roversRouter = require('./Routes/rovers');
var roverPhotosRouter = require('./Routes/photos');


app.use('/test', testRouter);
app.use('/rovers', roversRouter);
app.use('/photos', roverPhotosRouter);


app.listen(port, () => {
    console.log(`Test backend is running on port ${port}`);
});

