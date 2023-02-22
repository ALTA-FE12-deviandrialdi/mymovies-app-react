import axios from "axios";

const instance = axios.create({
  baseURL: `https://api.themoviedb.org/3/movie/`,
});

export default {
  nowPlaying: () =>
    instance({
      method: "GET",
      url: "now_playing?",
    }),
};
