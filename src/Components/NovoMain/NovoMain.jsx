import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    NavLink
  } from 'react-router-dom';
  import Img4 from './icono-de-carro-la-compra-añadir-al-carrito-diseño-plano-sobre-fondo-blanco-ilustración-vectorial-vector-210692317.jpg';
  import Button from 'react-bootstrap/Button';
  import Img2 from '../Novo/novo-logo.png';

function NovoMain() {


    return(

  <div className="CompleteDiv2">
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
    <Link to="/home">
      <div className="cardDiv">
       <div className="card">
          <div class="flip-card-back">
            <h1>
              Continue
            </h1>
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
          </div>
    
         
          <div class="image_container">
            <img className="Imagen4"
            src={Img4}
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