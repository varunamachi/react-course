import axios from "axios";

const accessKey = "fHl3Al57a0GHYCpVmH7q5hDnm54miVTGBsfdDQns1Vw";

export default axios.create({
  headers: {
    Authorization: `Client-ID ${accessKey}`,
  },
  baseURL: "https://api.unsplash.com",
});
