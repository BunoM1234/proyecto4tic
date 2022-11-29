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
import NovoAttempts2 from './Components/NovoAttempts/NovoAttempts';
import NovoCookies from './Components/NovoCookies/NovoCookies';
import { CookiesProvider } from 'react-cookie';
//import NovoRegister from './Components/Novo_Register/NovoRegister';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render
  (
    <React.StrictMode>
      <CookiesProvider>
        <Router>
          <Routes>
            
              <Route path="/" element={<Novoform />} />
              <Route path="/home" element={<NovoFrontPage />} />
              <Route path="/main" element={<NovoMain/>} />
              <Route path="/orders" element={<NovoBuy/>}/>
              <Route path="/attempts" element={<NovoAttempts2/>} />
            
          </Routes>
        </Router>
        </CookiesProvider>
    </React.StrictMode>
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
//<Route path="/register" element={<NovoRegister />} />