//import React from 'react';
import * as React from 'react';
import Img2 from '../Novo/novo-logo.png';
import Button from 'react-bootstrap/Button';
import DeleteIcon from './1345874.png'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink
} from 'react-router-dom';

const NovoFrontPage =() =>{
    return(
    <form className = "form-home">
      <div>
        <div className="DarkBar" id="DarkBar">
          <img className="Imagen2"
            src={Img2}
            alt="Imagen"
          />
          <Link to="/">
            <Button type="button" className = "outBtn" variant = "danger">
              Log Out
            </Button>{''}
          </Link>
          {/* <Button className="outBtn" variant="danger">Log Out</Button>{' '} */}
        </div>
          <div className="pageContent">
            <div className ="pcLine1" align = "center">
              <input type="text" variant className="partInput1"></input>
              <input type="text" variant className="partsInput1"></input>
              <input type="number" variant className="quantityInput1"></input>
              <Button variant="danger">Delete</Button>
            </div>
            <div className ="pcLine2" align="center">
              <input type="text" variant className="partInput2">
                placeholder
              </input>
              <input type="text" variant className="partsInput2"></input>
              <input type="number" variant className="quantityInput2"></input>
              <Button variant="danger">Delete</Button>
            </div>
            <div className="pcLine3" align="center">
              <p>Placa:</p>
              <input type="text" variant className="partInput3"></input>
              <input type="text" variant className="partsInput3"></input>
              <input type="number" variant className="quantityInput3"></input>
              <Button variant="danger">Delete</Button>
            <div className="btnDiv" align="right">
              <Button variant="primary">OK</Button>
            </div>
          </div>
          
          </div>
      </div>
    </form>
    )};

  export default NovoFrontPage;