import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Routing from './routing.jsx'
import "./CSS/output.css"
import { store } from "./redux/store.js";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Routing />
  </Provider>,
)

