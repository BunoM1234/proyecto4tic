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
            <input type="number" variant className="quantityInput1"></input>
            <input type="number" variant className="quantityInput2"></input>
            <input type="number" variant className="quantityInput2"></input>
            <Button variant="outlined">OK</Button>
            <Button>Delete</Button>
          </div>
      </div>
    )};

  export default NovoFrontPage;