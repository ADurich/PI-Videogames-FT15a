import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {store} from "./store";
import axios from "axios";
import dotenv from "dotenv";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'animate.css/animate.min.css'

dotenv.config();

axios.defaults.baseURL = process.env.REACT_APP_API || "http://localhost:3001";


ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  </Provider>,
  document.getElementById('root')
  
);

reportWebVitals();


