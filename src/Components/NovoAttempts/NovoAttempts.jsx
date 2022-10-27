import React from 'react';
 import Img2 from '../Novo/novo-logo.png';
 import Button from 'react-bootstrap/Button';
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
 
 function NovoAttempts()
 {
   const [boards, setBoards] = useState()
   const [loading, setLoading] = useState(false)
   const [searchTitle, setSearchTitle] = useState("")

   useEffect(()=>{
     const LoadBoard = async() => {
       setLoading(true);
       const response = await axios.get("http://lcoalhost:8000/NovoApi_APP/boards");
       setBoards(response.data);
       setLoading(false);
     }

     LoadBoard();
       //fetch("http://lcoalhost:8000/NovoApi_APP/boards").then(res => res.json).then(data => setBoards(data))
     }, [])
 
     
     return(
         <div className="App">
             <h3>Search Filter</h3>
             <input>Hola</input>
             {loading ? (<h4>loading...</h4>): (
                (boards.map(item => <h5 key={item.id}>{item.title}</h5>))
             )}
         </div>
     )
}

export default NovoAttempts;
