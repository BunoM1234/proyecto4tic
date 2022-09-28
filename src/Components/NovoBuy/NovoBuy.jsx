import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    NavLink
  } from 'react-router-dom';
  import Button from 'react-bootstrap/Button';
  import Img2 from '../Novo/novo-logo.png';
  import "bootstrap/dist/css/bootstrap.min.css";

const NovoForm = () => {
    return (
        <header className="DarkBar" id="DarkBar">
            <Link to="/main">
                <img className="Imagen2"
                    src={Img2}
                    alt="Imagen"
                />
            </Link>
            <Link to ="/">
                <Button className="outBtn" variant="danger">
                    Log Out
                </Button>
            </Link>
       </header>
    )};

export default NovoForm;