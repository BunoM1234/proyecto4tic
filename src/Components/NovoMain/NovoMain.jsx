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

  <div className="completeDiv5">
    <HeaderBar/>
    <Link to="/home">
    
      <div className="cardDiv">
       <div className="card">
          <div class="flip-card-back">
            <h1>
              Continue
            </h1>
            <h6 className = "ordersTxt">
              You have 0 uncompleted orders
            </h6>
          </div>
    
         
          <div class="image_container">
            <img className="Imagen4"
            src={Img4}
            alt="Imagen4"
          />
          </div>
        
        
          <div class="text_back">
            <div>
              <h1 className="h1TxtBack">Begin</h1>
              <p>
                Start a new order. Select board/s, BOMs, quantity and name of the order.
              </p>
              <span nameClass ="span1">See more</span>
            </div>
          </div>
         
        </div>
     
        </div>
        </Link>

    <Link to="/orders">
      <div className="cardDiv2">
       <div className="card">
          <div class="flip-card-back">
            <h1>
              Continue
            </h1>
            <h6 className = "ordersTxt">
              You have 0 pending orders
            </h6>
          </div>
    
         
          <div class="image_container">
            <img className="Imagen4"
            src={Img5}
            alt="Imagen4"
          />
          </div>
        
        
          <div class="text_back">
            <div>
              <h1 className="h1TxtBack">Orders</h1>
              <p>
                See your pending orders. 
              </p>
              <span nameClass ="span1">See more</span>
            </div>
          </div>
         
        </div>
     
        </div>
        </Link>
      </div>  
    )
}

export default NovoMain;