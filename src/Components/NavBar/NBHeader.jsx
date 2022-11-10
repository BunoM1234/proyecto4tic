import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    NavLink
} from 'react-router-dom';
import MenuButton from '../MenuButton/MenuButton';
import Img2 from '../Novo/novo-logo.png';
import Button from 'react-bootstrap/Button';
import './NavBar.css';


function HeaderBar() {
    return(
        <div align="center" className="headerBar">
            <header className="DarkBar" id="DarkBar">
                <Link to="/main">
                    <img className="Imagen2"
                        src={Img2}
                        alt="Imagen"
                    />
                </Link>
                <Link to="/">
                    <Button className="btnLogOut">
                        Log out
                    </Button>
                </Link>
            </header>
        </div>
    );
};

export default HeaderBar;
