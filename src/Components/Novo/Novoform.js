import Img from './Astronaut suit-rafiki.png'
import Img1 from './Virtual reality-cuate.png'

const Novoform =() =>{
    return(
      <div>
    <div allign="right">
        <img className = "Imagen1"
          src= {Img1}
          alt="Imagen"
          width= "700"
          height= "700"
        />
    </div>
        <form className = "Form1">
          <div id="Titulo" className="Tituloform">
            <h1>
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
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Show Password</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>
    
)};

export default Novoform;