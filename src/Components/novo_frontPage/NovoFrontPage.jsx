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
import { Windows } from 'css.gg';
import { useEffect, useState } from "react";
import axios from 'axios';



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

  function FetchBoardFunction()
  {
    const [boards, setBoards] = useState()
    const [loading, setLoading] = useState(false)
    const [searchTitle, setSearchTitle] = useState("")

    useEffect(()=>{
      const loadBoard = async() => {
        setLoading(true);
        const response = await axios.get("http://lcoalhost:8000/NovoApi_APP/boards");
        setBoards(response.data);
        setLoading(false);
      }

      loadBoard();
        //fetch("http://lcoalhost:8000/NovoApi_APP/boards").then(res => res.json).then(data => setBoards(data))
      }, [])
  }
  

  // Como sacar info de la api
  // const [boms, setBoms] = useState()
  // useEffect(()=>{
  //   fetch("http://lcoalhost:8000/NovoApi_APP/boms").then(res => res.json).then(data => setBoms(data))
  // }, [])

  return (
    <div className="completeDiv">
     <HeaderBar/>
    <form className="OrderForm" autoComplete="off">
    <div className="gradient">
      <div className="form-field">
      <div className="filterDiv">
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
                onInput={FetchBoardFunction}
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