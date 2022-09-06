import Img from './Astronaut suit-rafiki.png'
import Img1 from './Virtual reality-cuate.png'
import Img2 from './novo-logo.png'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

const Novoform =() =>{
    return(
  <div>
    <div className="DarkBar" id="DarkBar">  
    <img className = "Imagen2"
          src= {Img2}
          alt="Imagen"
        /> 
    </div> 
        
    <div allign="right">
        <img className = "Imagen1"
          src= {Img1}
          alt="Imagen"
          width= "650"
          height= "650"
        />
                 
    </div>
        <form className = "Form1">
         
          <div id="Titulo" className="Tituloform">
            <h1 className="TitleLogIn">
              LOG IN
            </h1>
          </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label"><h5>User</h5></label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" className="form-text">Enter your User</div>
    
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label"><h5>Password</h5></label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>
    
)};

export default Novoform;