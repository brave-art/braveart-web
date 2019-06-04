import React from 'react';

import {Route,NavLink,HashRouter}
    from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';

import './App.css';
import './css/bootstrap.min.css';
import './css/font-awesome.min.css';
import './css/animate.css';
import './css/owl.carousel.css';
import './css/style.css';


import HomeTab from "./component/home/HomeTab";
import AboutTab from "./component/about/AboutTab";
import AxeThrowingTab from "./component/axe-throwing/AxeThrowingTab";

import logo from "./img/logo.png";
import ContactTab from "./component/contact/ContactTab";
// import logo from "./img/braveart/Brave Art Axe Logo.png";

function App() {
  return (

      <HashRouter>

          <header className = "header-area">

              <Navbar fixed="top" sticky="top" expand={"lg"} bg={"dark"} variant={"dark"}>
                  <Navbar.Brand href={"#"}>Brave Art Adventures</Navbar.Brand>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                  <Navbar.Collapse id="responsive-navbar-nav">
                      <Nav className={"mr-auto"}>
                          <Nav.Link><NavLink to="/axe-throwing">Axe Throwing</NavLink></Nav.Link>
                          <NavDropdown title="Other Experiences" id="collasible-nav-dropdown">
                              {/*<NavDropdown.Item><NavLink to="/axe-throwing">Axe Throwing</NavLink></NavDropdown.Item>*/}
                              <NavDropdown.Item><NavLink to="/escape-rooms">Escape Rooms</NavLink></NavDropdown.Item>
                              <NavDropdown.Divider />
                              <NavDropdown.Item><NavLink to="/upcoming">Upcoming Offerings</NavLink></NavDropdown.Item>
                          </NavDropdown>
                          <Nav.Link><NavLink to="/about">About us</NavLink></Nav.Link>
                          <Nav.Link><NavLink to="/contact">Contact</NavLink></Nav.Link>
                      </Nav>
                  </Navbar.Collapse>
              </Navbar>

              {/*<a className = "logo-area">*/}
              {/*    <NavLink to ="/">*/}
              {/*      <img src = {logo} alt = "Company Logo"/>*/}
              {/*    </NavLink>*/}
              {/*</a>*/}
              {/*<div className="nav-switch">*/}
              {/*    <i className="fa fa-bars"/>*/}
              {/*</div>*/}
              {/*<a href = "Tel:517-292-6061" className = "phone-number">(517)292-6061</a>*/}

              {/*<nav className="nav-menu">*/}
              {/*    <ul>*/}
              {/*        <li><NavLink to="/">Home</NavLink></li>*/}
              {/*        <li><NavLink to="/about">About us</NavLink></li>*/}
              {/*        <li><NavLink to="/axe-throwing">Axe Throwing</NavLink></li>*/}
              {/*        /!*<li><NavLink to="/portfolio">Portfolio</NavLink></li>*!/*/}
              {/*        <li><NavLink to="/contact">Contact</NavLink></li>*/}
              {/*    </ul>*/}
              {/*</nav>*/}
          </header>


          <Route exact path="/" component={HomeTab}/>
          <Route path="/about" component={AboutTab}/>
          <Route path="/axe-throwing" component={AxeThrowingTab}/>
          <Route path="/contact" component={ContactTab}/>
      </HashRouter>
  );
}

export default App;
