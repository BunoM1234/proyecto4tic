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
import  { Component } from 'react'

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
    state={
        dataS:[],
        boards:[],
        boms:[],
        stock:[]
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
        axios.get('http://127.0.0.1:8000/NovoApi_APP/boms/1')
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
            </div>
        )
    }
}

export default Article
