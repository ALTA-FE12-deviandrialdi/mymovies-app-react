import React, { Component } from "react";
import axios from "axios";

import Layout from "../components/Layout";
import Card from "../components/Card";
import Loading from "../components/Loading";

import { ResultType } from "../utils/types/MovieType";

interface StateType {
  movies: [];
  loading: boolean;
}

class Home extends Component<StateType> {
  state = {
    movies: [],
    loading: true,
  };

  componentDidMount() {
    this.nowPlaying();
  }

  nowPlaying() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=en-US&page=1`
      )
      .then((data) => {
        const { results } = data.data;
        this.setState({ datas: results });
      })
      .catch((error) => {})
      .finally(() => {
        this.setState({ loading: false });
      });
  }

  render() {
    const { movies } = this.state;

    return (
      <Layout>
        <div className="container flex flex-row">
          <div className="grid grid-flow-row auto-rows-max gap-3 md:grid-cols-4 lg:grid-cols-4 space-x-1">
            {movies.map((data: ResultType) => (
              <Card
                key={data.id}
                title={data.title}
                poster_path={data.poster_path}
                vote_average={data.vote_average}
                id={data.id}
                labelButton="ADD TO FAVORITE"
              />
            ))}
          </div>
        </div>
      </Layout>
    );
  }
}
