import React, { useState, useEffect } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="container  header-container">
        <a className="logo" href="#">
          LOGO
        </a>
        <nav>
          <ul className="list">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contacts">Contacts</NavLink>
          </ul>
        </nav>
        <button className="headerbtn">Log in</button>
      </div>
    </header>
  );
}
export default Header;
