import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore } from 'redux';
import Reducer from "./reducer/Reducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from "react-redux";


const store = createStore(Reducer, composeWithDevTools() );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);