import axios from "axios";

const KEY = "AIzaSyAvOivYtzAx844Nsf1in14CGBxyDgCM9DI";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
