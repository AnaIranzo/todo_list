import React, { Component } from "react";
import './Header.css'
import Nav from "./Nav/Nav";

class Header extends Component {
  render() {
    return <header>
    <Nav/>
    <h1>To do List</h1>
    
    </header>
  }
}

export default Header;



