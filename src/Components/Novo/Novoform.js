const Novoform =() =>{
    return(
        <form>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">User</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" className="form-text">Enter your User</div>
    
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Show Password</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    
)};

export default Novoform;