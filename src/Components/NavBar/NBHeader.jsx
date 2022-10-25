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

function HeaderBar() {
    return(
        <div align="center" className="headerBar">
            {/* <header className="DarkBar" id="DarkBar">
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
            </header> */}
            


<nav class="navbar navbar-expand-lg bg-dark fixed-top ml-auto" name="navbar">
  <div class="container-fluid ml-auto">
    <Link to="/main">
        <img className="Imagen2"
          src={Img2}
          alt="Imagen"
        />
    </Link>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
      <ul class="ml-auto navbar-nav">
        <Link to="/">
            <Button>
                Log out
            </Button>
        </Link>
      </ul>
    </div>
  </div>
</nav>
        </div>
    );
};

export default HeaderBar;
