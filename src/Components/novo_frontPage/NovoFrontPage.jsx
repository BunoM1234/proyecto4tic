//import React from 'react';
import * as React from 'react';
import Img2 from '../Novo/novo-logo.png';
import Button from 'react-bootstrap/Button';
import DeleteIcon from './1345874.png'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink
} from 'react-router-dom';
import { useState } from 'react';


function NovoFrontPage() {
  const [serviceList, setServiceList] = useState([
    {service: ""}
  ]);
  
  const handleServiceAdd = () => {
         setServiceList([...setServiceList, {service: ""}])
        }
      
  const handleserviceRemove = () => {
         const list= [...serviceList]
          list.splice(index, 1);
          setServiceList(list)
        }
        
return(
    <form className="novoApp" autoComplete="off">
      <div className="DivPrincipal">
        <label htmlFor ="service"></label>
        {serviceList.map((singleService, index) => (
        <div key={index} className = "serviceList">
          <div className ="firstDiv">
            <input className = "service" type="text" id="service" required/>
            {serviceList.length-1 === index && serviceList.length <4 && 
              <button type="button" className="añadir"
               onClick={handleServiceAdd}
              >
               <span>Add a service</span>
              </button>
            }
          </div>
          <div className="secondDiv">
            {serviceList.length > 1 && (
             <button type="button" className="borrar"
              onClick={() => handleserviceRemove(index)}
             >
              <span>Remove</span>
             </button>
            )}
          </div>
        </div>
        ))}
      </div>
    </form>
    );
  }
    
    // <form className = "form-home">
    //   <div>
    //     <div className="DarkBar" id="DarkBar">
    //       <img className="Imagen2"
    //         src={Img2}
    //         alt="Imagen"
    //       />
    //       <Link to="/">
    //         <Button type="button" className = "outBtn" variant = "danger">
    //           Log Out
    //         </Button>{''}
    //       </Link>
    //     </div>
    //       <div className="pageContent">
    //         <div className ="pcLine1" align = "center">
    //           <input type="text" variant className="partInput1"></input>
    //           <input type="text" variant className="partsInput1"></input>
    //           <input type="number" variant className="quantityInput1"></input>
    //           <Button variant="danger">Delete</Button>
    //         </div>
    //         <div className ="pcLine2" align="center">
    //           <input type="text" variant className="partInput2"></input>
    //           <input type="text" variant className="partsInput2"></input>
    //           <input type="number" variant className="quantityInput2"></input>
    //           <Button variant="danger">Delete</Button>
    //         </div>
    //         <div className="pcLine3" align="center">
    //           <p>Placa:</p>
    //           <input type="text" variant className="partInput3"></input>
    //           <input type="text" variant className="partsInput3"></input>
    //           <input type="number" variant className="quantityInput3"></input>
    //           <Button variant="danger">Delete</Button>
    //         <div className="btnDiv" align="right">
    //           <Button variant="primary">OK</Button>
    //         </div>
    //       </div>
    //       </div>
    //   </div>
    // </form>


  // )};

  //export default NovoFrontPage;