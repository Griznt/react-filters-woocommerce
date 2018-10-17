import React, { Component } from "react";
import WooCommerceAPI from "woocommerce-api";
// import "./../../css/main-frame.css";
import MainFrame from "./main-frame";
require("dotenv").config();

class MainFrameContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.timerId = null;
    this.WooCommerce = null;
  }

  componentDidMount() {
    this.WooCommerce = new WooCommerceAPI({
      url: "https://pestrokot.ru", // Your store URL
      consumerKey: process.env.WOOCOMMERCE_KEY, // Your consumer key
      consumerSecret: process.env.WOOCOMMERCE_SECRET, // Your consumer secret
      wpAPI: true, // Enable the WP REST API integration
      version: "wc/v2" // WooCommerce WP REST API version
    });

    this.WooCommerce.get("products", function(err, data, res) {
      console.log("woocommerce: ", { err, data, res });
    });
  }

  componentWillUnmount() {
    if (this.timerId) clearTimeout(this.timerId);
  }

  render() {
    return <MainFrame />;
  }
}

export default MainFrameContainer;
