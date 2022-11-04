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
                <Link to="/orders">
                    Go to orders
                </Link>
                <Link to="/home">
                    Create orders
                </Link>
                <MenuButton className="menuBtn" align="right"/>
            </header>
        </div>
    );
};

export default HeaderBar;
