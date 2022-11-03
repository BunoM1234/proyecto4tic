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
import ReactDOM from "react-dom";

//  function NovoAttempts()
//  {
//    const [boards, setBoards] = useState()
//    const [loading, setLoading] = useState(false)
//    const [searchTitle, setSearchTitle] = useState("")

//    useEffect(()=>{
//      const LoadBoard = async() => {
//        setLoading(true);
//        const response = await axios.get("http://lcoalhost:8000/NovoApi_APP/boards");
//        setBoards(response.data);
//        setLoading(false);
//      }

//      LoadBoard();
//        //fetch("http://lcoalhost:8000/NovoApi_APP/boards").then(res => res.json).then(data => setBoards(data))
//      }, [])

function App() {
  const [boms, setBoms] = useState();

  useEffect(() =>  {
    fetch("http://127.0.0.1:8000/NovoApi_APP/boms", {
      mode: 'no-cors'
    }).then((boms) => {
      console.log(boms)
      boms.json()
    }).then((response) => {
      //setBoms(response)
      console.log(response)
    }).catch(e => console.log(e));
    
  }, []);

  return (
    <table boarder="1">
      <tbody>
      <tr>
        <td>boms</td>
        <td>stock</td>
      </tr>
      </tbody>
      {boms?.map((bom) => {
        return(
          <tr>
            <td>{boms.uuid}</td>
            <td>{boms.id}</td>
          </tr>
        )
      })}
    </table>
  );
}

export default App;
