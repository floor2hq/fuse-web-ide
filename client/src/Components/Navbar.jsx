import React from "react";
import "../Styles/Navbar.css";

const Navbar = () => {
  return (
    <div id="navbar_container">
      <div id="nav_buttons">
        <div id="logo"></div>

        <button id="file_btn" className="button">
          File
        </button>
        <button id="edit_btn" className="button">
          Edit
        </button>
        <button id="selection_btn" className="button">
          Selection
        </button>
        <button id="view_btn" className="button">
          View
        </button>
        <button id="go_btn" className="button">
          Go
        </button>
        <button id="run_btn" className="button">
          Run
        </button>
      </div>
      <input type="search" name="" id="search" placeholder="  Search" />
      <div id="additional"></div>
    </div>
  );
};

export default Navbar;
