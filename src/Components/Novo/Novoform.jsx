
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink
} from 'react-router-dom';
import './NovoForm.css';
import HeaderBar from '../NavBar/NBHeader';
import Img2 from './novo-logo.png';
import { Helmet } from 'react-helmet';

export default function (props) {
  let [authMode, setAuthMode] = useState("signin")

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }

  const TITLE = 'Novo Parts';

  if (authMode === "signin") {
    return ( 
      <div className="Auth-form-container">
        <Helmet>
          <title>{ TITLE }</title>
        </Helmet>
        <div align="center" className="headerBar2">
            <header className="WhiteBar" id="WhiteBar">
                <Link to="/main">
                    <img className="Imagen2"
                        src={Img2}
                        alt="Imagen"
                    />
                </Link>
            </header>
        </div>
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
              Not registered yet?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign Up
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
            <Link to="/main">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </Link>
            </div>
          </div>
        </form>
      </div>
    )
  }
}