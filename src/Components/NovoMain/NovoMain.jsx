import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    NavLink
  } from 'react-router-dom';
  import Img4 from './testing-kit.5a620275.png';
  import Button from 'react-bootstrap/Button';
  
  import Img5 from './SBC002AV.2824187d.png';
  import MenuButton from '../MenuButton/MenuButton';
  import MenuItem from "@material-ui/core/MenuItem";
  import Menu from "@material-ui/core/Menu";
  import HeaderBar from "../NavBar/NBHeader";
  

function NovoMain() {


    return(
<>
    <HeaderBar/>
  <div className="completeDiv5">
    <Link style={{textDecoration: 'none', textAlign: "center"}} to="/home">
    
      <div className="Card1">
        <div class="image_container">
            <img className="Imagen4"
            src={Img4}
            alt="Imagen4"
          />
          <h1>Begin Order</h1>
          <h5>Choose a board, a BOM and quantity.</h5>
        </div>  
      </div>
        </Link>

    <Link style={{textDecoration: 'none', textAlign: "center"}} to="/orders">
      <div className="Card2">
        <img className="Imagen4"
          src={Img5}
          alt="Imagen4"
        />
        <h1>Pending Orders</h1>
        <h5>See your diferent pending orders.</h5>
      </div>
      </Link>
      </div>  
      </>
    )
}

export default NovoMain;