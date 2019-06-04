import React from 'react';

import {Route,NavLink,HashRouter}
    from 'react-router-dom';

import Tabs from 'react-bootstrap/Tabs';

import './App.css';
import './css/bootstrap.min.css';
import './css/font-awesome.min.css';
import './css/animate.css';
import './css/owl.carousel.css';
import './css/style.css';


import HomeTab from "./component/home/HomeTab";
import AboutTab from "./component/about/AboutTab";
import AxeThrowingTab from "./component/service/AxeThrowingTab";

import logo from "./img/logo.png";
import ContactTab from "./component/contact/ContactTab";
// import logo from "./img/braveart/Brave Art Axe Logo.png";

function App() {
  return (

      <HashRouter>

          <header className = "header-area">
              <a className = "logo-area">
                  <NavLink to ="/">
                    <img src = {logo} alt = "Company Logo"/>
                  </NavLink>
              </a>
              <div className="nav-switch">
                  <i className="fa fa-bars"/>
              </div>
              <a href = "Tel:517-292-6061" className = "phone-number">(517)292-6061</a>

              <nav className="nav-menu">
                  <ul>
                      <li><NavLink to="/">Home</NavLink></li>
                      <li><NavLink to="/about">About us</NavLink></li>
                      <li><NavLink to="/axe-throwing">Axe Throwing</NavLink></li>
                      {/*<li><NavLink to="/portfolio">Portfolio</NavLink></li>*/}
                      <li><NavLink to="/contact">Contact</NavLink></li>
                  </ul>
              </nav>
          </header>


          <Route exact path="/" component={HomeTab}/>
          <Route path="/about" component={AboutTab}/>
          <Route path="/axe-throwing" component={AxeThrowingTab}/>
          <Route path="/contact" component={ContactTab}/>
      </HashRouter>
  );
}

export default App;
