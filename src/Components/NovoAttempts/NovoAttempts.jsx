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
import  { Component } from 'react';
import MaterialTable from 'material-table';
import tableIcons from '../tableIcons/tableIcons';

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

class Article extends Component {
    constructor() {
        super();
        this.state={
            dataS:[],
            boards:[],
            boms:[],
            stock:[]
        }
    }

    componentDidMount(){
        axios.get('http://127.0.0.1:8000/NovoApi_APP/manufacturers/')
        .then(res => {
            this.setState({
                dataS:res.data
            })
            console.log(res.data);
        })
        axios.get('http://127.0.0.1:8000/NovoApi_APP/boards/')
        .then(res => {
            this.setState({
                boards:res.data
            })
            console.log(res.data);
        })
        axios.get('http://127.0.0.1:8000/NovoApi_APP/boms/')
        .then(res => {
            this.setState({
                boms:res.data
            })
            console.log(res.data);
        })
        axios.get('http://127.0.0.1:8000/NovoApi_APP/stock/')
        .then(res => {
            this.setState({
                stock:res.data
            })
            console.log(res.data);
        })
    }

    render() {
        return (
            <div>
                Hey Ujjwal ! All Ok 
                <p>{ this.state.dataS.manufacturers &&
                     this.state.dataS.manufacturers[0][1]}</p>
                <p>{ this.state.stock.stock &&
                     this.state.stock.stock[0][2]}

                </p>
                <MaterialTable
                className = "NovoTable"
                title="Parts table"
                icons={tableIcons}
                columns={[
                    { title: "Part", field: "part"},
                    { title: "Code", field: "code"},
                    { title: "Quantity", field: "quantity", type: "numeric"},
                    { title: "Stock", field: "stock"},
                    { title: "Price", field: "price", type: "numeric"},
                ]}
                data={[
                    {   part:  '', 
                        code: '12356', 
                        quantity: 4, 
                        stock: 'No', 
                        price: 40, 
                    },
                    {   part: 'PCB_A', 
                        code: '123', 
                        quantity: 3, 
                        stock: 'Yes', 
                        price: 35 
                    },
                ]}
                options={{
                    exportButton: true,
                    headerStyle: {
                        backgroundColor: '#EEE',
                    actionsColumnIndex: -1,
                }}}
              />
            </div>
        )
    }
}

export default Article;
