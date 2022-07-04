import axios from "axios";

async function getRovers() {
    const response = await axios({
        url: "https://api.nasa.gov/mars-photos/api/v1/rovers?sol=1000&api_key=qj9vwpFaaunBJQeJYnDtZjW1tW7ckM3gBZdQUh28",
        method: "get",
    });
    return (response.data);
};

async function getRoverPhotos(rover_name: string, sol: string, camera_type: string, page: string) {
    const response = await axios({
        url: "https://api.nasa.gov/mars-photos/api/v1/rovers/" + rover_name + "/photos?sol=" + sol + "&camera=" + camera_type + "&page=" + page+ "&api_key=qj9vwpFaaunBJQeJYnDtZjW1tW7ckM3gBZdQUh28",
        method: "get",
    });
    var photos: Array<string> = [];
    for (var photo of response.data.photos) {
        photos.push(photo.img_src);
    }
    return photos;
};

export {getRovers, getRoverPhotos};