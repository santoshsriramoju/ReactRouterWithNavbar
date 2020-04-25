import React, { Component } from "react";
import "./Header.css";
import Logo from "../../Images/logo.png";
import {NavLink} from 'react-router-dom';

import Comp1 from "../Comp1/Comp1";
import Comp2 from "../Comp2/Comp2";

export default class Header extends Component {
  render() {
    return (
      <nav class="navbar">
          <NavLink to="/"><img src={Logo} alt="landlords" />
          </NavLink>
          <h2>Landlords</h2>
          <div class="routes">
          <NavLink to="/comp1" activeStyle={{ color: "green" }}>
            Comp1
          </NavLink>
          <NavLink to="/comp2" activeStyle={{ color: "green" }}>
            Comp2
          </NavLink>    
          </div>      
      </nav>
    );
  }
}
