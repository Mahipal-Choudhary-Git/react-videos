import axios from "axios";

const KEY = "AIzaSyADSkn3O1OYHSWxH9R94_Ys1soqi--JKFg";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        key: KEY,
    },
});
