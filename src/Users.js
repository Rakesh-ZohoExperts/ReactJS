import React from 'react'
import FunctionalComp from './FunctionalComp';
import ClassComp from './ClassComp';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './Pages';
import About from './Pages/about';
import Contact from './Pages/Contact';
import Footer from './Components/Footer';

function Users() {
    return (
            <Router>
            <Navbar />
            <Routes>
              <Route path='/' exact element={<Home />} />
              <Route path='/about' element={<About/>} />
              <Route path='/contact' element={<Contact/>} />
            </Routes>    
            <Footer />
            </Router>

    );
  }
  
  export default Users;