import React from 'react';
import Img2 from '../Novo/novo-logo.png';
import Button from 'react-bootstrap/Button';

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
      </div>
    )};

  export default NovoFrontPage;