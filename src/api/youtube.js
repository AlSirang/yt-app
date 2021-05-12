import axios from "axios";
const KEY = "AIzaSyCUPLGbAoEdDuv57mtocxS1wP0LsnfjzYw";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    type: "video",
    key: KEY,
  },
});
