import '../styles/App.css';
import Home from './Home';
import Restaurant from './Restaurant';
import Business from './Business';
import Blog from './Blog';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
        
        <Router>
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/restaurant" element = {<Restaurant />} />
          <Route path = "/business" element = {<Business />} />
          <Route path = "/blog" element = {<Blog />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;


/* code bits to copy from


example of router/routes/route, double check import statements
basically routes are a map of the website


import React from 'react';
import '../styles/App.css';
import Nav from './Nav';
import Home from './Home';
import About from './About';
import Shop from './Shop';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Nav />
      <Router>
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/about" element = {<About />} />
          <Route path = "/shop" element = {<Shop />} />
        </Routes>
      </Router>
    
    </div>
  );
}

here's the nav file that lets you change the address

import React from 'react';
import '../styles/Nav.css';


function Nav() {
  return (
    <nav className = "nav">
      <h1> It Just Means More </h1>
      
      
      <ul className = "nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/shop">Shop</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
*/