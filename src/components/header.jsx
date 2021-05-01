import { Component } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

function NavigationBar() {
  return (
    <div id="app">
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: "#e3f2fd" }}
      >
        <div className="container-fluid">
          <nav className="navbar navbar-light">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/">
                <img
                  src="https://raw.githubusercontent.com/gdoyssaga/our_WEPPRO/22030122c194d3ff5b6b6907587e2ac418aac53f/image/logo.svg"
                  alt=""
                  style={{ width: "90px", height: "70px" }}
                  className="d-inline-block align-top"
                />
              </Link>
            </div>
          </nav>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item py-2">
                <Link to="/" className="nav-link">
                  for Creators
                </Link>
              </li>
              <li className="nav-item py-2">
                <Link to="/UserMng" className="nav-link">
                  User Manage
                </Link>
              </li>
              <li className="nav-item py-2">
                <Link to="/EventMng" className="nav-link">
                  Event Manage
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav me-2 mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavigationBar;
