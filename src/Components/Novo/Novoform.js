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

const Novoform = () => {
  return (
    <div className = "completeDiv1"> 
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
      <form className="Form1" onSubmit={ev => {
        ev.preventDefault();

        const inputUser= ev.target.inputUser.value;
        const inputPass = ev.target.inputPass.value;
      
        login(inputUser, inputPass);
      }}>
        <div id="Titulo" className="Tituloform">
          <h1 className="TitleLogIn" style={{fontFamily: 'Arial'}}>
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
      </form>
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