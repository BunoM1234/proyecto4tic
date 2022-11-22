import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    NavLink
} from 'react-router-dom';
import MenuButton from '../MenuButton/MenuButton';
import Img21 from './novologo.png';
import Button from 'react-bootstrap/Button';
import './NavBar.css';
import {useCookies} from "react-cookie"


function HeaderBar() {
  const [cookies, setCookie, removeCookie] = useCookies(['user']);
  console.log(cookies)
    return(
        <div align="center" className="headerBar">
            <header className="DarkBar" id="DarkBar">
                <Link to="/main">
                    <img className="Imagen21"
                        src={Img21}
                        alt="Imagen"
                    />
                </Link>
                <div className="divLogOut">
                        <Button onClick={()=>{
                            removeCookie('Password')
                            removeCookie('Name')
                            removeCookie('user')
                            window.location.reload()
                        }} className="btnLogOut">
                            Log out
                        </Button>
                </div>
            </header>
        </div>
    );
};

export default HeaderBar;
