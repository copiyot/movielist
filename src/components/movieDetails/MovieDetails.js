import React from "react";

import Fargo from "../../img/fargo.jpeg";
import "./MovieDetail.css";

const movieDetails = (props) => {
  const onClickHandler = () => {
    let isClicked = false;
    let mainCol = " ";
    let detailsCol = " ";
    let row = " ";
    props.closeClicked(isClicked, mainCol, detailsCol, row);
    localStorage.setItem("shrink", " ");
  };

  return (
    <div className="card movie-details">
      <img className="card-img-top" src={Fargo} alt="Card image cap" />
      <i className="fas fa-times close-icon" onClick={onClickHandler}></i>
      <div className="movie-info card-body">
        <div className="d-flex justify-content-between">
          <h5 className="card-title">The Shape of Water</h5>
          <span className="release-year">2017</span>
        </div>
        <div className="d-flex justify-content-between">
          <span className="director-name">Guillermo del Toro</span>
          <span className="">Drama | Fantasy</span>
        </div>
        <hr />
        <p className="card-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dolore
          minus ducimus harum aperiam enim ea eligendi magnam, neque quaerat
          velit nostrum totam quibusdam! Expedita libero exercitationem veniam
          quas corporis?
        </p>
      </div>
      <div className="card-footer d-flex justify-content-between">
        <div>
          <i className="fas fa-star ml-3"></i>
          <div className="unfav">UNFAV</div>
        </div>
        <div className="camera">
          <i className="fas fa-camera-retro ml-1"></i>
          <div>SET</div>
        </div>
        <div className="imdb">
          <i className="fab fa-imdb ml-3"></i>
          <div>INFOS</div>
        </div>
        <div className="youtube">
          <i className="fab fa-youtube ml-4"></i>
          <div>TRAILER</div>
        </div>
      </div>
    </div>
  );
};

export default movieDetails;
