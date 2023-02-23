import axios from "axios";

const instance = axios.create({
  baseURL: `https://api.themoviedb.org/3/https://api.themoviedb.org/3/movie/now_playing?/`,
});

export default {
  nowPlaying: () =>
    instance({
      method: "GET",
      url: "now_playing?",
    }),
};


// https://api.themoviedb.org/3/movie/now_playing?api_key=f297d44c25022cf9a12c2b75b9059c2d&language=en-US&page=1

// `nowPlaying?api_Key=${api_Key}&language=en-US&page=${page}`