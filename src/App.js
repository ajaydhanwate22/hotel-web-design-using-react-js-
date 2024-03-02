import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About'
import Service from './components/Service'
import Contact from './components/Contact'
import Menu from './components/Menu'




import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="/about" element={<About />}>
          </Route>
          <Route path="/Contact" element={<Contact />}>
          </Route>
          <Route path="/Service" element={<Service />}>
          </Route>
          <Route path="/Menu" element={<Menu />}>
          </Route>
        </Routes>
        <Footer />
      </Router>

    </>
  );
}

export default App;
