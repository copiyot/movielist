import React from "react";

import fargo from "../../img/fargo.jpeg";
import "./Movie.css";

class Movie extends React.Component {
  onClickHandler = () => {
    let isClicked = true;
    let mainCol = "col-9";
    let detailsCol = "col-3";
    let row = "row";
    localStorage.setItem("shrink", "shrink");
    this.props.movieClicked(isClicked, mainCol, detailsCol, row);
  };

  render() {
    return (
      <div className="card" onClick={this.onClickHandler}>
        <img className="card-img-top" src={fargo} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title text-truncate">{this.props.title}</h5>
          <div className="d-flex justify-content-between">
            <div className="card-text movie-overview text-truncate">
              {this.props.overview}
            </div>
            <div className="release-year card-text">
              {this.props.release_date.slice(0, 4)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Movie;
