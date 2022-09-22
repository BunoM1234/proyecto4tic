import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    NavLink
  } from 'react-router-dom';

function NovoMain() {


    return(

  <div className="CompleteDiv2">
       <header className="DarkBar" id="DarkBar">
        <img className="Imagen2"
          src={Img2}
          alt="Imagen"
        />
        <Link to ="/">
         <Button className="outBtn" variant="danger">
          Log Out
         </Button>
        </Link>
       </header>
  </div>

    )

}