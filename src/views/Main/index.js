import React from "react";
import NavBar from "../../components/NavBar";
import "./style.css";
import { Link } from "react-scroll";

function MainPage() {
  return (
    <div className="row" id="/">
      <NavBar />

      <div className="col-md">
        <div className="mobile-image"></div>
        <div className="intro-text alignCenter">
          <h2 className="mobile-title">VIK MAHARAJ</h2>
          <br></br>
          <h2 className="intro">Hey, what's up?</h2>
          <br></br>
          <h3><span class="h2-name">I'm Vik.</span> I'm now a developer.</h3>
          <br></br>
          <h4>I bring a unique perspective to website design and development through my varied professional background.</h4>
          <br></br>
          <br></br>
          <Link to="about"
           activeClass="active"
           spy={true}
           smooth={true}
          >
            <button type="button" className="readMore btn btn-info">
              Read More
            </button>
          </Link>
        </div>
      </div>
      <div className="col-md">
        <div className="right-image"></div>
      </div>
    </div>
  );
}

export default MainPage;