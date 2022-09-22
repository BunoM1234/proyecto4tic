import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
//import "Components/Novo/Novoform";
import Novoform from './Components/Novo/Novoform';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink
} from 'react-router-dom';
import NovoFrontPage from './Components/novo_frontPage/NovoFrontPage';
import NovoMain from './Components/NovoMain/NovoMain';
import NovoBuy from './Components/NovoBuy/NovoBuy';
//import NovoRegister from './Components/Novo_Register/NovoRegister';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render
  (
    <React.StrictMode>
        <Router>
          <Routes>
            <Route path="/" element={<Novoform />} />
            <Route path="/home" element={<NovoFrontPage />} />
            <Route path="/main" element={<NovoMain/>} />
            <Route path="/buy" element={<NovoBuy/>}/>
          </Routes>
        </Router>
    </React.StrictMode>
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
//<Route path="/register" element={<NovoRegister />} />