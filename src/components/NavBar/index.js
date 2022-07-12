import React from "react";
import "./style.css";


function NavBar() {
    return (
      <nav className="navbar navbar-expand-md">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavMenu">
          <i class="fas fa-bars fa-lg"></i>
        </button>

      </nav>
    );
  }

export default NavBar;