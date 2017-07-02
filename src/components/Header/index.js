import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Header.css";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="header-wrapper">
          <div className="header-left">
            <h1><Link to="/">Kyle Pollich</Link></h1>

            <h3>Lancaster, PA Web Developer and Software Engineer</h3>
          </div>

          <ul className="nav-list">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/blog">Blog</Link></li>
          </ul>
        </div>
      </header>
    );
  }
}

export default Header;
