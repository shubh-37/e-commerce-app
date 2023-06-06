import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter as Router } from "react-router-dom";
import ProductContProvider from "./contexts/ProductContProvider";
import AuthProvider from "./contexts/AuthProvider";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ProductContProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </ProductContProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
