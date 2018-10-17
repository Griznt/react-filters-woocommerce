import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
// import { Provider } from "react-redux";
// import { store } from "./store";
import MainFrameContainer from "./component/main-frame/main-frame-container";
const target = document.querySelector("#root");

if (target)
  ReactDOM.render(
    // <Provider store={store}>
    <MainFrameContainer />,
    // </Provider>
    target
  );
