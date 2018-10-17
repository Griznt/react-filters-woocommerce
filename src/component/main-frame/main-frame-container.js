import React, { Component } from "react";
import "./../../css/main-frame.css";
import MainFrame from "./main-frame";

class MainFrameContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.timerId = null;
  }

  componentDidMount() {}

  componentWillUnmount() {
    if (this.timerId) clearTimeout(this.timerId);
  }

  render() {
    return <MainFrame />;
  }
}

export default MainFrameContainer;
