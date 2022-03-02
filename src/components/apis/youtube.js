import axios from "axios";
const KEY = "AIzaSyDsA9zpGCejZq75DN1wvsgRTvph60whAAY";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  },
  headers: {}
});