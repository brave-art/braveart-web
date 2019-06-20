import React from 'react';

import {Route,NavLink,BrowserRouter}
    from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
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


import ContactTab from "./component/contact/ContactTab";
import EscapeRoomComingSoon from "./component/escape-room/EscapeRoomComingSoon";
// import logo from "./img/braveart/Brave Art Axe Logo.png";

function App() {
  return (

      <BrowserRouter>

          <header className = "header-area">

              <Navbar className="navBar" fixed="top" sticky="top" expand={"lg"}  variant={"dark"}>
                  <Navbar.Brand href={"/"}>Brave Art Adventures</Navbar.Brand>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                  <Navbar.Collapse id="responsive-navbar-nav">
                      <Nav>
                          {/*<Nav.Link href={"/axe-throwing"}>*/}
                          <NavigationLink
                              name={"Axe Throwing"}
                              link={"/axe-throwing"}
                          />
                          <NavigationLink
                              name={"Contact"}
                              link={"/contact"}
                          />
                          <NavigationLink
                              name={"About Us"}
                              link={"/about"}
                          />
                      {/*    <NavLink className={"navLinks"} to="/axe-throwing"*/}
                      {/*             activeStyle={{*/}
                      {/*                  fontWeight: "bold",*/}
                      {/*                 backgroundColor: "#03A9F4"*/}
                      {/*                  // color: "#212121"*/}
                      {/*             }}>*/}
                      {/*        Axe Throwing*/}
                      {/*    </NavLink>*/}
                      {/*    /!*</Nav.Link>*!/*/}
                      {/*    /!*<NavDropdown className={"navLinks"} title="Other Experiences">*!/*/}
                      {/*    /!*    /!*<NavDropdown.Item><NavLink to="/axe-throwing">Axe Throwing</NavLink></NavDropdown.Item>*!/*!/*/}
                      {/*    /!*    <NavDropdown.Item><NavLink to="/escape-rooms">Escape Rooms</NavLink></NavDropdown.Item>*!/*/}
                      {/*    /!*    <NavDropdown.Divider />*!/*/}
                      {/*    /!*    <NavDropdown.Item><NavLink to="/upcoming">Upcoming Offerings</NavLink></NavDropdown.Item>*!/*/}
                      {/*    /!*</NavDropdown>*!/*/}
                      {/*    <NavLink to="/about" className={"navLinks"} activeStyle={{*/}
                      {/*        fontWeight: "bold",*/}
                      {/*        backgroundColor: "#03A9F4"*/}
                      {/*        // color: "#212121"*/}
                      {/*    }}>About us</NavLink>*/}
                      {/*    <NavLink to="/contact" className={"navLinks"} activeStyle={{*/}
                      {/*        fontWeight: "bold",*/}
                      {/*        backgroundColor: "#03A9F4"*/}
                      {/*        // color: "#212121"*/}
                      {/*    }}>Contact</NavLink>*/}
                      </Nav>
                  </Navbar.Collapse>
              </Navbar>
          </header>


          <Route exact path="/" component={HomeTab}/>
          <Route path="/axe-throwing" component={AxeThrowingTab}/>
          <Route path="/contact" component={ContactTab}/>
          <Route path="/about" component={AboutTab}/>
          <Route path="/escape-room" component={EscapeRoomComingSoon}/>
      </BrowserRouter>
  );
}

const NavigationLink = (props) => (
    <NavLink className={"navLinks"} to={props.link}
             activeStyle={{
                 fontWeight: "bold",
                 backgroundColor: "#03A9F4"
                 // color: "#212121"
             }}>
        {props.name}
    </NavLink>
);

export default App;
