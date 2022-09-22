import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    NavLink
  } from 'react-router-dom';
  import Img2 from '../Novo/novo-logo.png';
  import Button from 'react-bootstrap/Button';

function NovoMain() {


    return(

  <div className="CompleteDiv2">
       <header className="DarkBar" id="DarkBar">
        <img className="Imagen2"
          src={Img2}
          alt="Imagen"
        />
       </header>
       <div class="card">
          <div class="flip-card-back">
            <h1>
              Continue
            </h1>
          </div>

          <div class="image_container"></div>

          <div class="text_back">
            <div>
              <h1>Order</h1>
              <p>
                Select board, BOMs, quantity and name of the order
              </p>
              <span>See more</span>
            </div>
          </div>
        </div>
  </div>

    )

}

export default NovoMain;