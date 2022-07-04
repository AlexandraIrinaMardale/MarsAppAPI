import express from "express";
import axios from "axios";

import { getRovers, getRoverPhotos } from './Controllers/controller';

const app = express();
const port = 8000;

app.use(express.json());
const router = express.Router();


router.get('/test', (req, res) => res.send('Hello world !'));
app.use('/', router);


app.get("/rovers", async (req, res) => {
    res.send(await getRovers());
});

app.get("/rovers/:rover_name/photos/:camera_type/:sol/:page", async (req, res) => {
    res.send(await getRoverPhotos(req.params.rover_name, req.params.sol, req.params.camera_type, req.params.page));

});

app.listen(port, () => {
    console.log(`Test backend is running on port ${port}`);
});

