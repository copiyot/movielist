import React from "react";
import axios from "axios";

import Movie from "../movie/Movie";
import MovieDetails from "../movieDetails/MovieDetails";
import "./Movies.css";

class Movies extends React.Component {
  state = {
    movies: []
  };

  async componentDidMount() {
    let response = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=b95f625c22f30d1488d992c6fd213fa8"
    );

    this.setState({
      movies: response.data.results,
    });

    localStorage.setItem("shrink", " ");
  }


  moviesRenderHandler() {
    let movies = this.state.movies.map((movie) => {
      return (
        <Movie
          movieClicked={this.props.movieClicked}
          title={movie.title}
          release_date={movie.release_date}
          overview={movie.overview}
          key={movie.id}
          poster_path={this.state.imageURL}
        />
      );
    });

    return movies;
  }

  render() {
    let shrink = localStorage.getItem("shrink");

    return (
      <div className="main-page">
        <div className="row mt-5">
          <div className="col-6 watchlist-title">Watchlist</div>
          <div className="col-6 text-right text-truncate favorite-title justify pt-4">
            All your favorite movies in one place
          </div>
        </div>
        <hr></hr>
        <div className={`card-columns ${shrink} mt-4`}>
          {this.moviesRenderHandler()}
        </div>
      </div>
    );
  }
}

export default Movies;
