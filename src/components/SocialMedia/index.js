import React from "react";
import "./style.css";

function SocialMedia() {
    return (
      <div className="row">
        <div className="row">
          <div className="col-sm-12 text-center fluid">
            <h5 className="email">vikaashmaharaj@gmail.com</h5>
          </div>
        </div>
        <div className="row">
          <div className="col-sm" />
          <div className="col-sm text-center">
            <a href="https://github.com/Vik-Maharaj" target="_blank"><i class="fab fa-github-square fa-3x" /></a>
            <a href="https://www.linkedin.com/in/vikaashmaharaj/" target="_blank"><i class="fab fa-linkedin fa-3x" /></a>
          </div>
          <div className="col-sm" />
        </div>
      </div>
    )
  }

export default SocialMedia;