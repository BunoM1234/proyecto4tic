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
import Button from 'react-bootstrap/Button';
import NovoMain from '../NovoMain/NovoMain';
import HeaderBar from "../NavBar/NBHeader";

const Novoform = () => {
  return (
    <div className = "completeDiv1"> 
    <HeaderBar/>
    <div className = "form1DIV">
      <form className="Form1" onSubmit={ev => {
        ev.preventDefault();

        const inputUser= ev.target.inputUser.value;
        const inputPass = ev.target.inputPass.value;
      
        login(inputUser, inputPass);
      }}>
        <div className="loginDiv">
        <div id="Titulo" className="Tituloform">
          <h1 className="TitleLogIn" style={{fontFamily: 'helvetica'}}>
            LOG IN
          </h1>
        </div>
        <div className="mb-4">
          <input type="text"id="inputUser" required className="inputUser" placeholder="Enter user"/>
        </div>
        <div className="mb-3">
          <input type="password"className="inputPass" id="inputPass" required placeholder="Enter password"/>
        </div>  
        <div className="mb-3 form-check">
        </div>
            <Button type="sumbit" className = "homeBtn" variant = "primary">
              Sumbit
            </Button>{''}
        </div>
      </form>
    </div>
    <div allign="right" >
        <img className="Imagen1"
          src={Img1}
          alt="Imagen"
          width="550"
          height="550"
        />
      </div>
  </div>
  )
};

const login = (inputUser, inputPass) => {
  if (inputUser === 'benji' && inputPass === 'chej')
  window.location.replace('/main');

  else
  alert('login incorrecto')
}


export default Novoform;