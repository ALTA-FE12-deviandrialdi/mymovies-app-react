import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Component } from "react";

import Homepage from "../pages";
import DetailMovies from "../pages/DetailMovie";
import Login from "../pages/Login";
// import Favorite from "../pages/Favorite";
import Register from "../pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/movie/:id_movie",
    element: <DetailMovies />,
  },
  // {
  //   path: "/favorites",
  //   element: <Favorite />,
  // },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

class App extends Component {
  render() {
    return <RouterProvider router={router} />;
  }
}

export default App;
