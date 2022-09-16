//import React from 'react';
import * as React from 'react';
import Img2 from '../Novo/novo-logo.png';
import Button from 'react-bootstrap/Button';
import DeleteIcon from './1345874.png'

const NovoFrontPage =() =>{
    return(
      <div>
        <div className="DarkBar" id="DarkBar">
          <img className="Imagen2"
            src={Img2}
            alt="Imagen"
          />
          <Button className="outBtn" variant="danger">Log Out</Button>{' '}
        </div>
          <div className="pageContent">
            <div className ="pcLine1" align = "center">
              <input type="number" variant className="quantityInput1"></input>
              <input type="text" variant className="partInput1"></input>
            </div>
            <div className ="pcLine2" align="center">
              <input type="number" variant className="quantityInput2"></input>
              <input type="text" variant className="partInput2"></input>
            </div>
            <div className="pcLine3" align="center">
              <input type="number" variant className="quantityInput3"></input>
              <input type="text" variant className="partInput3"></input>
            <div className="btnDiv">
              <Button variant="primary">OK</Button>
              <Button variant="danger">Delete</Button>
            </div>
          </div>
          
          </div>
      </div>
    )};

  export default NovoFrontPage;