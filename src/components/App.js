import React from "react";

import Tabs from "./tabs/Tabs";
import Movies from "./movies/Movies";
import MovieDetails from "./movieDetails/MovieDetails";
import "./App.css";

class App extends React.Component {
  state = {
    isClicked: false,
    mainCol: "",
    detailsCol: "",
    row: ""
  };

  onMovieClickHandler = (isClicked, mainCol, detailsCol, row) => {
    this.setState({ isClicked, mainCol, detailsCol, row });
  };

  onDetailsClose = (isClicked, mainCol, detailsCol, row, shrink) => {
    this.setState({ isClicked, mainCol, detailsCol, row, shrink });
  };

  render() {
    return (
      <div className={`${this.state.row}`}>
        <div className={`${this.state.mainCol}`}>
          <Tabs />
          <div className="container-fluid">
            <Movies movieClicked={this.onMovieClickHandler} />
          </div>
        </div>
        {this.state.isClicked && (
          <div className={`movie-details ${this.state.detailsCol}`}>
            <MovieDetails closeClicked={this.onDetailsClose} />
          </div>
        )}
      </div>
    );
  }
}

export default App;
