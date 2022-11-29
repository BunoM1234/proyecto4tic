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




function NovoAttempts2() {
 const [options, setOptions] = useState([]);
 const previousController = useRef();

 const getData = (searchTerm) => {
    if (previousController.current) {
      previousController.current.abort();
    }
    const controller = new AbortController();
    const signal = controller.signal;
    previousController.current = controller;
    fetch("http://127.0.0.1:8000/NovoApi_APP/boards/" + searchTerm, {
      signal,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        console.log(
          "search term: " + searchTerm + ", results: ",
          myJson.products
        );
        const updatedOptions = myJson.products.map((p) => {
          return { title: p[1][0] };
        });
        setOptions(updatedOptions);
      });
  };
  
  const onInputChange = (event, value, reason) => {
    if (value) {
      getData(value);
    } else {
      setOptions([]);
    }
  };


    return(
        <Autocomplete
        id="combo-box-demo"
        options={options}
        onInputChange={onInputChange}
        getOptionLabel={(option) => option.code}
        style={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Combo box" variant="outlined" />
        )}
      />
    );
};

export default NovoAttempts2;