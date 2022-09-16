import Img from './Astronaut suit-rafiki.png'
import Img1 from './Astronaut_suit.gif'
import Img2 from './novo-logo.png'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink
} from 'react-router-dom';
import {React} from 'react';
import { Button } from 'react';


const Novoform = () => {
  return (
    <div className = "completeDiv"> 
      <header className="DarkBar" id="DarkBar">
        <img className="Imagen2"
          src={Img2}
          alt="Imagen"
        />
      </header>
      <div allign="right" >
        <img className="Imagen1"
          src={Img1}
          alt="Imagen"
          width="600"
          height="600"
        />
      </div>
    <div className = "form1DIV">
      <form className="Form1">
        <div id="Titulo" className="Tituloform">
          <h1 className="TitleLogIn" style={{fontFamily: 'Arial'}}>
            LOG IN
          </h1>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label"><h5>User</h5></label>
          <input type="text"className="form-control" id="exampleInputEmail1"/>
          <div id="emailHelp" className="form-text">Enter your User</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label"><h5>Password</h5></label>
          <input type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3 form-check">
        </div>
        <button className="btn btn-primary">Submit
        </button>
        <button variant="outlined" color="primary">
          Primary
        </button>
        <Link to="/home"> Home</Link>
      </form>
    </div>
    </div>
  )
};

export default Novoform;