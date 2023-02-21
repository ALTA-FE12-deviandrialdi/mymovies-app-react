import React, { Component } from "react";

import Layout from "../components/Layout";
import Card from "../components/Card";

import movie from "../dummy/movie.json";

// interface State {}

export class Home extends Component {
  render() {
    return (
      <Layout>
        <div className="container flex flex-row">
          <div className="grid grid-flow-row auto-rows-max gap-3 md:grid-cols-4 lg:grid-cols-4 space-x-1">
            {movie.map((item: any) => (
              <Card
                id={item.id}
                title={item.title}
                description={item.description}
                image={item.image}
              />
            ))}
          </div>
        </div>
      </Layout>
    );
  }
}

export default Home;
