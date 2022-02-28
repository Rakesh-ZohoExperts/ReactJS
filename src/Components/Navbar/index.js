import React from "react";
//import { Nav, NavLink, NavMenu } from "./NavbarElements";
//import { FaBars } from "react-icons/fa";
import { NavLink} from "react-router-dom";
//import styled from "styled-components";

    const Navbar = () => {

    return (
        <div className="navigation">
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <div className="container">
          
          <NavLink className="navbar-brand" to="/">
            Rakesh Website
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              
    
    <li className="nav-item">
                <NavLink className="nav-link" to="/#" activeStyle>
        Home
    </NavLink>
    </li>
    <li className="nav-item">
    <NavLink className="nav-link" to="/about" activeStyle>
        About
    </NavLink>
    </li>
    <li className="nav-item">
    <NavLink className="nav-link" to="/contact" activeStyle>
        Contact
    </NavLink>
    </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    )

    }
    export default Navbar;