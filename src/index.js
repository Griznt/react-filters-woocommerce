import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import MainFrameContainer from "./component/main-frame/main-frame-container";
const target = document.querySelector("#root");

if (target) ReactDOM.render(<MainFrameContainer />, target);
