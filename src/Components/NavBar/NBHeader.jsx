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


function HeaderBar() {
    return(
        <div align="center" className="headerBar">
            <header className="DarkBar" id="DarkBar">
                <Link to="/main">
                    <img className="Imagen21"
                        src={Img21}
                        alt="Imagen"
                    />
                </Link>
                <Link to="/" className="linkLogOut">
                    <Button className="btnLogOut">
                        Log out
                    </Button>
                </Link>
            </header>
        </div>
    );
};

export default HeaderBar;
