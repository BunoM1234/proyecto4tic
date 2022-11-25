import React from 'react';
 import Img2 from '../Novo/novo-logo.png';
 import Button from '@mui/material/Button';
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
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import './NovoFrontPage.css';
import { useCookies } from "react-cookie";
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "../NovoTheme/GlobalStyles";
import { lightTheme, darkTheme } from "../NovoTheme/Theme";
import  {useDarkMode} from "../NovoTheme/UseDarkMode";
import Toggle from "../NovoTheme/Toggler";
import { styled } from "@mui/material/styles";
import  { Component } from 'react';

const options = ['Option 1', 'Option 2'];

function App() {
  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState('');
  const [value2, setValue2] = React.useState(options[0]);
  const [inputValue2, setInputValue2] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const [theme, themeToggler, mountedComponent] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  const handleClick = () => {
    setOpen(true);
  };

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

    // const response = await fetch(url, {
    //     headers: "application/json",
    //     mode: "no-cors",
        
    // })


    componentDidMount(){
        axios.get('http://127.0.0.1:8000/NovoApi_APP/manufacturers/', { mode: 'no-cors'})
        .then(res => {
            this.setState({
                dataS:res.data
            })
            console.log(res.data);
        })
        axios.get('http://127.0.0.1:8000/NovoApi_APP/boards/', { mode: 'no-cors'})
        .then(res => {
            this.setState({
                boards:res.data
            })
            console.log(res.data);
        })
        
        axios.get('http://127.0.0.1:8000/NovoApi_APP/boms/', { mode: 'no-cors'})
        .then(res => {
            this.setState({
                boms:res.data
            })
            console.log(res.data);
        })
        axios.get('http://127.0.0.1:8000/NovoApi_APP/stock/', { mode: 'no-cors'})
        .then(res => {
            this.setState({
                stock:res.data
            })
            console.log(res.data);
        })
        
        axios.post('http://127.0.0.1:8000/NovoApi_APP/boards/ind/' , {
            board: 'SUP005AX-EB',
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }
  }

  

  const StyledAutocomplete = styled(Autocomplete)({
    
    "&.Mui-focused .MuiInputLabel-outlined": {
      color: "blue"
    },
    "& .MuiAutocomplete-inputRoot": {
      color: "blue",
      // This matches the specificity of the default styles at https://github.com/mui-org/material-ui/blob/v4.11.3/packages/material-ui-lab/src/Autocomplete/Autocomplete.js#L90
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "blue"
      },
      "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: "#383F9B"
      },
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "blue"
      }
    }
  });

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button color="primary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  const [serviceList, setServiceList] = useState([{ service: "" }]);

  const handleServiceChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...serviceList];
    list[index][name] = value;
    setServiceList(list);
  };

  const handleServiceRemove = (index) => {
    const list = serviceList.slice();
    console.log(serviceList)
    console.log(serviceList[index])
    console.log(list.splice(index, 1))
    console.log(list)
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
        // // setLoading(true);
        // // const response = await axios.get("http://lcoalhost:8000/NovoApi_APP/boards");
        // // setBoards(response.data);
        // // setLoading(false);
      }

      loadBoard();
        //fetch("http://lcoalhost:8000/NovoApi_APP/boards").then(res => res.json).then(data => setBoards(data))
      }, [])
  }
  

  const [cookies, setCookie] = useCookies(['user']);
  if(!cookies.user) {
      return window.location.replace("/")
  }

  axios.post('http://127.0.0.1:8000/NovoApi_APP/boards/', {
    board: 'SUP005AX-EB',
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

  axios.get('http://127.0.0.1:8000/NovoApi_APP/boards/', { mode: 'no-cors'})
        .then(res => {
            this.setState({
                boards:res.data
            })
            console.log(res.data);
        })

  

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
    <div className="completeDiv">
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
                value={value}
                onChange={(event, newValue) => {
                setValue(newValue);
              }}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue);
              }}
                id="controllable-states-demo"
                options={options}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Board" />}
              />
              
              <Autocomplete 
               className='autoCompleteBoard'
               freeSolo
               value={value2}
               onChange={(event, newValue2) => {
               setValue2(newValue2);
             }}
               inputValue={inputValue2}
               onInputChange={(event, newInputValue2) => {
               setInputValue2(newInputValue2);
             }}
               id="controllable-states-demo"
               options={options}
               sx={{ width: 300 }}
               renderInput={(params) => <TextField {...params} label="BOM" />}
/>
              <Autocomplete 
                className='autoCompleteBoard'
                freeSolo
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
                  id={index}
                  onClick={(e) => handleServiceRemove(e.target.id)}
                  class="btn btn-outline-danger"
                  name="deleteBtn"
                >
                  <span>Remove</span>
                </button>
              )}
            </div>
            <div className="second-division">
              {serviceList.length - 1 === index && serviceList.length < 3 && (
                <Button
                  type="button"
                  onClick={handleServiceAdd}
                  className="add-btn"
                  variant="contained"
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
          color="secondary"
          variant="contained"
          className="buyOrder"
          onClick={handleClick}
        >
          <span class="text">Add to buy order</span>
          
        </Button>
        <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Order Created!"
        action={action}
      />
      </div>
    </div>
    </form>
    </div>
    </div>
    </>
        
    </ThemeProvider>
  );
}

export default App;