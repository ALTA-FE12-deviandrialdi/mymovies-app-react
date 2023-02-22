import React, { Component } from "react";
import axios from "axios";

import Layout from "../components/Layout";
import Card from "../components/Card";
import Loading from "../components/Loading";

import api from "../services/api";

interface ResultType {
  // ini adalah kumpulan beberapa data yang akan diambil untuk component card
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  datas: []; // ini adalah kumpulan dari banyak data di API. makanya datas
}

// interface PropsType {}

interface StateType {
  data: ResultType[]; // setelah di type lalu data tersebut kedalam state
  loading: boolean;
}

class Home extends Component<ResultType> {
  // ResultType adalah interface ResultType
  state = {
    datas: [], // ini adalah data dari ResultType
    loading: true,
  };

  componentDidMount() {
    // ini adalah ketika komponen di muat ulang
    this.nowPlaying();
  }

  nowPlaying() {
    // ini adalah function
    axios
      .get(
        // method yang digunakan
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=en-US&page=1` // ini API key yang akan dipakai
      )
      .then((response) => {
        const { results } = response.data;
        this.setState({ datas: results }); // ini adalah semua data yang ada dalam API key
      })
      .catch((error) => {
        console.log("error : ", error);
      });
    // .finally(() => {
    //   this.setState({ loading: false });
    // });
  }

  render() {
    const { datas } = this.state; // data dimuat

    return (
      <Layout>
        <div className="container flex flex-row">
          <div className="grid grid-flow-row auto-rows-max gap-3 md:grid-cols-4 lg:grid-cols-4 space-x-1">
            {datas.map(
              (
                data: ResultType // jika data dalam bentuk array maka di map?
              ) => (
                <Card
                  key={data.id}
                  title={data.title}
                  poster_path={data.poster_path}
                  vote_average={data.vote_average}
                /> // bagian dalam result (API) berbentuk object dan card ada dalam component CARD
              )
            )}
          </div>
        </div>
      </Layout>
    );
  }
}

export default Home;
