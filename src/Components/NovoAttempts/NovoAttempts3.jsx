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
import axios from 'axios';
import ReactDOM from "react-dom";
import  { Component } from 'react';
import MaterialTable from 'material-table';
import tableIcons from '../tableIcons/tableIcons';
import { useState, useEffect, useRef } from "react";


function NovoAttempts3() {
    const [options, setOptions] = useState([]);
    const previousController = useRef();

    fetch("http://127.0.0.1:8000/NovoApi_APP/boards/", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(function (response) {
        return console.log(response.json());
      })
    //   .then(function (myJson) {
    //     console.log(
    //       myJson.products
    //     )} )
}

export default NovoAttempts3;