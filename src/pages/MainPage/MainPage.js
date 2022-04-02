import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Content } from "./MainPageStyles";

class MainPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Content>К В О С</Content>
        <Footer />
      </div>
    );
  }
}

export default MainPage;
