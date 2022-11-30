import React from "react";
// import React from 'react';
import {
     BrowserRouter as Router,
     Routes,
     Route,
     Link,
     NavLink
} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Img2 from '../Novo/novo-logo.png';
import "bootstrap/dist/css/bootstrap.min.css";
import { useTable } from 'react-table';
//import Table from 'react-bootstrap/Table';
import { FaFileCsv } from "react-icons/fa";
import MaterialTable from 'material-table';
import tableIcons from '../tableIcons/tableIcons';
import HeaderBar from "../NavBar/NBHeader";
import axios from 'axios';
import  { Component } from 'react';
import Article from '../NovoAttempts/NovoAttempts';
import { useCookies } from "react-cookie";
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "../NovoTheme/GlobalStyles";
import { lightTheme, darkTheme } from "../NovoTheme/Theme";
import { useState, useEffect } from "react";
import  {useDarkMode} from "../NovoTheme/UseDarkMode";
import Toggle from "../NovoTheme/Toggler";
import './NovoBuy.css';
   
   const NovoBuy = () => {
    const [cookies, setCookie] = useCookies(['user']);
    const [theme, themeToggler, mountedComponent] = useDarkMode();

    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    if(!cookies.user) {
      return window.location.replace("/")
    }
    if(!mountedComponent) return <div/>
    return (
      <ThemeProvider theme={themeMode}>
      <>
      <GlobalStyles/>
      <div> 
      <HeaderBar className="navBar"/>
        <div className="divToggler">
          <Toggle theme={theme} toggleTheme={themeToggler} className='btnToggle'/>
        </div>
        <div className ="completeDiv">
            <div className="NovoTableDiv">
              <MaterialTable
                className = "NovoTable"
                title="Parts table"
                icons={tableIcons}
                columns={[
                    { title: "Board", field: "board"},
                    { title: "Part", field: "part"},
                    { title: "Code", field: "code"},
                    { title: "Quantity", field: "quantity", type: "numeric"},
                    { title: "Stock", field: "stock"},
                    { title: "Price", field: "price", type: "numeric"},
                ]}
                data={[
                    { board: "Board_1", part: 'PCB_B', code: '12356', quantity: 4, stock: 'No', price: 40 },
                    { board: "Board_2", part: 'PCB_A', code: '123', quantity: 3, stock: 'Yes', price: 35 },
                ]}
                options={{
                    exportButton: true,
                    headerStyle: {
                        backgroundColor: '#EEE',
                    actionsColumnIndex: -1,
                }}}
              />
        </div>
      <div className='divToggler'>
    </div>   
  </div>
</div>
</>
        
</ThemeProvider>
);
};

export default NovoBuy;