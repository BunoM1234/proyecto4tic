
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
import Button from 'react-bootstrap/Button';
import { useCookies } from 'react-cookie';

export default function (props) {
  let [authMode, setAuthMode] = useState("signin")

  const [name, setName] = useState('');
  const [pwd, setPwd] = useState('');
  const [cookies, setCookie] = useCookies(['user']);

  const handle = () => {
    if(name === 'benji' && pwd === 'chej'){
      setCookie('Name', name, { path: '/'});
      setCookie('Password', pwd, { path: '/'});
      setCookie('user', name, { path: '/'});
    }
  }
 
  if(cookies.user) {
      return window.location.replace("/main")
  }

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }

  const login = (inputUser, inputPass) => {
    if (inputUser === 'benji' && inputPass === 'chej')
    window.location.replace('/main');
    else
    alert('login incorrecto')
  }

  

  if (authMode === "signin") {
    return ( 
      <div className="Auth-form-container">
        <div align="center" className="headerBar2">
            <header className="WhiteBar" id="WhiteBar">
                    <img className="Imagen2"
                        src={Img2}
                        alt="Imagen"
                    />
            </header>
        </div>
        <form className="Auth-form" onSubmit={ev => {
          ev.preventDefault();

          const inputUser= ev.target.inputUser.value;
          const inputPass = ev.target.inputPass.value;

          login(inputUser, inputPass);
        }}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="form-group mt-3">
              <label>User</label>
              <input
                type="user"
                className="form-control mt-1"
                placeholder="Enter email"
                required
                id="inputUser"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                required
                id="inputPass"
                value={pwd}
                onChange={(e) => setPwd(e.target.value)}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <Button 
                type="submit" 
                className="btn btn-primary"
                onClick={handle}
              >
                Submit
              </Button>{''}
            </div>
          </div>
        </form>
      </div>
    )
  }
}