import "./index.css";
import reportWebVitals from "./reportWebVitals";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./i18n";
import App from "./App";

// append app to dom
ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();