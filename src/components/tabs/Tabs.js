import React from "react";

import "./Tabs.css";

const Tabs = () => {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a className="nav-link disabled" href="#"></a>
      </li>
      <li className="nav-item">
        <a className="nav-link active" href="#">
          <i className="fas fa-star"></i>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#">
          <i className="fas fa-video mr-2"></i>
          History
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#">
          <i className="fas fa-cog mr-2"></i>
          Setting
        </a>
      </li>
    </ul>
  );
};

export default Tabs;
