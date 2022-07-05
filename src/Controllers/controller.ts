import axios, { AxiosResponse } from "axios";

const apiConfig = require('../Config/apiConfig');

export function test (req: any, res: any ) {
    res.send("Hello World!");
}

export async function getRovers(req: any, res: any) {
    const response = await axios({
        url: apiConfig.BASE_URL + "?" + apiConfig.DEFAULT_SOL + "&api_key=" + apiConfig.API_KEY,
        method: "get",
    });
    res.send(response?.data);

};

export async function getRoverPhotos(req: any, res: any) {
    const response = await axios({
        url: apiConfig.BASE_URL + "/"
            + req.params.rover_name
            + "/photos?sol="
            + req.params.sol
            + "&camera="
            + req.params.camera_type
            + "&page="
            + req.params.page
            + "&api_key="
            + apiConfig.API_KEY,
        method: "get",
    });

    var photos: Array<string> = [];
    for (var photo of response.data.photos) {
        photos.push(photo.img_src);
    }
    res.send(photos);
};




