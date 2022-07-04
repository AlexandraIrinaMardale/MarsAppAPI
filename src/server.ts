import express from "express";
import axios from "axios";

const app = express();
const port = 8000;

app.use(express.json());
const router = express.Router();


router.get('/test', (req, res) => res.send('Hello world !'));
app.use('/', router);


app.get("/rovers", async (req, res) => {
    try {
        const response = await axios({
            url: "https://api.nasa.gov/mars-photos/api/v1/rovers?sol=1000&api_key=qj9vwpFaaunBJQeJYnDtZjW1tW7ckM3gBZdQUh28",
            method: "get",
        });
        res.send(response.data);
    } catch (err) {
        res.status(500).json({ message: err });
    }
})


app.get("/rovers/:rover_name/photos/:camera_type/:sol/:page", async (req, res) => {
    try {
        const response = await axios({
            url: "https://api.nasa.gov/mars-photos/api/v1/rovers/" + req.params.rover_name + "/photos?sol=" + req.params.sol + "&camera=" + req.params.camera_type + "&page=" + req.params.page+ "&api_key=qj9vwpFaaunBJQeJYnDtZjW1tW7ckM3gBZdQUh28",
            method: "get",
        });
        var photos: string = "";
        for (var photo of response.data.photos) {
            photos+=`<img style="width: 200px; height: 150px;"  src="${photo.img_src}"><br>`;
        }
        res.send(photos);
    } catch (err) {
        res.status(500).json({ message: err });
    }

})


app.listen(port, () => {
    console.log(`Test backend is running on port ${port}`);
});