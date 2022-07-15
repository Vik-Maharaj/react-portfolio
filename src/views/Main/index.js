import React from "react";
import NavBar from "../../components/NavBar";

function MainPage() {
    return (
      <div className="row" id="/">
        <NavBar />
  
        <div className="col-md">
          <div className="mobile-image"></div>
          <div className="intro-text alignCenter">
            <h2 className="mobile-title">Vik Maharaj</h2>
            <br></br>
            <h2 className="intro">Full Stack Web Developer</h2>
            <br></br>
            <h3>Developer with a passion for UX/UI and professional experience in graphic design and digital media production.</h3>
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