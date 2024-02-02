import "./CSS/output.css";
import React from 'react';
import App from './App.jsx';
import Routing from './routing.jsx';
import { Provider } from "react-redux";
import ReactDOM from 'react-dom/client';
import { store } from "./redux/store.js";
import { persistor } from "./redux/store.js";
import { PersistGate } from "redux-persist/integration/react/";

ReactDOM.createRoot(document.getElementById('root')).render(
  <PersistGate persistor={persistor}>
    <Provider store={store}>
      <Routing />
    </Provider>
  </PersistGate>
)
