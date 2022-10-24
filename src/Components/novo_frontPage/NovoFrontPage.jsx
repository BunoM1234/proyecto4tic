import React from 'react';

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
 import { FaFilter } from "react-icons/fa"
 import {AiFillNotification} from "react-icons/ai"
 import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import HeaderBar from "../NavBar/NBHeader";



// function NovoFrontPage() {
//   const [serviceList, setServiceList] = useState([
//     {service: ""}
//   ]);
  
//   const handleServiceAdd = () => {
//          setServiceList([...setServiceList, {service: ""}])
//         }
      
//   const handleserviceRemove = () => {
//          const list= [...serviceList]
//           list.splice(index, 1);
//           setServiceList(list)
//         }
        
// return(
//     <form className="novoApp" autoComplete="off">
//       <div className="DivPrincipal">
//         <label htmlFor ="service"></label>
//         {serviceList.map((singleService, index) => (
//           <div key={index} className = "serviceList">
//             <div className ="firstDiv">
//               <input className = "service" type="text" id="service" required/>
//               {serviceList.length-1 === index && serviceList.length <4 && 
//                 (
//                 <button type="button" className="añadir"
//                 onClick={handleServiceAdd}
//                 >
//                 <span>Add a service</span>
//                 </button>
//                 )}
//             </div>
//             <div className="secondDiv">
//               {serviceList.length > 1 && (
//               <button type="button" className="borrar"
//                 onClick={() => handleserviceRemove(index)}
//               >
//                 <span>Remove</span>
//               </button>
//             )}
//           </div>
//         </div>
//         ))}
//       </div>
//     </form>
//     );
//   }
    
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

import { useState } from "react";
import { Windows } from 'css.gg';



function App() {
  const [serviceList, setServiceList] = useState([{ service: "" }]);

  const handleServiceChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...serviceList];
    list[index][name] = value;
    setServiceList(list);
  };

  const handleServiceRemove = (index) => {
    const list = [...serviceList];
    list.splice(index, 1);
    setServiceList(list);
  };
  
  const handleServiceAdd = () => {
    setServiceList([...serviceList, { service: "" }]);
  };

  // const NotificationBtn = document.querySelector(".buyOrder");

  // const requestPermission = function() {
  //   if(!("Notification" in Windows))
  //     throw new Error("Browser does not support Notification");

  //   Notification.requestPermission().then((permission) => {
  //       const notification = new Notification("New", {
  //         body: "A new order has been created",
  //       });
  //   });
  // };
  
  // NotificationBtn.addEventListener("click", requestPermission);

  return (
    <div className="completeDiv">
     <HeaderBar/>
    <form className="OrderForm" autoComplete="off">
    <div className="gradient">
      <div className="form-field">
      <div className="filterDiv">
      <Button className= "filterBtn">
              <span>Filter</span>
              <FaFilter />
      </Button>
      </div>
        {serviceList.map((singleService, index) => (
          <div key={index} className="services" align="center">
            <div className="first-division">
              
              <Autocomplete 
                className='autoCompleteBoard'
                disablePortal
                id="board-autocomplete"
                options={[
                  {label: 1},
                  {label: 2},
                  {label: 3},
                  {label: 4},
                ]}
                option={{
                  backgroundColor: '#FFFFFF',
                }}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Board" />}
/>
              
              <Autocomplete 
                className='autoCompleteBoard'
                disablePortal
                id="bom-autocomplete"
                options={[
                  {label: 1},
                  {label: 2},
                  {label: 3},
                  {label: 4},
                ]}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="BOM" />}
/>

              <Autocomplete 
                className='autoCompleteBoard'
                disablePortal
                id="quantity-autocomplete"
                options={[
                  {label: 1},
                  {label: 2},
                  {label: 3},
                  {label: 4},
                ]}
                option={{
                  backgroundColor: '#FFFFFF',
                }}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Quantity" />}
/>
              {serviceList.length !== 1 && (
                <button
                  type="button"
                  onClick={() => handleServiceRemove(index)}
                  class="btn btn-outline-danger"
                  name="deleteBtn"
                >
                  <span>Remove</span>
                </button>
              )}
            </div>
            <div className="second-division">
              {serviceList.length - 1 === index && serviceList.length < 15 && (
                <Button
                  type="button"
                  onClick={handleServiceAdd}
                  className="add-btn"
                  variant = "primary"
                >
                  <span>Add a Service</span>
                </Button>
                
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="makeOrder">
      
        <Button
          type="sumbit"
          variant="primary"
          className="buyOrder"
        >
          <span class="text">Add to buy order</span>
          
        </Button>
      </div>
    </div>
    </form>
    </div>
  );
}

export default App;