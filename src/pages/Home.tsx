import React, { Component } from "react";

import Layout from "../components/Layout";
import Card from "../components/Card";

import movie from "../dummy/movie.json";



export class Home extends Component {
  render() {
    return (
      <Layout>
        <div className="container flex flex-row">
          <div className="grid grid-flow-row auto-rows-max gap-3 md:grid-cols-4 lg:grid-cols-4 space-x-1">
            {movie.map((item: any, index) => (
              <Card
                key={index}
                image={item.image}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </Layout>
    );
  }
}

export default Home;
