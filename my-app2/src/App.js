import './App.css';
import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './component/Home';
import Topbar from './component/Navbar';
import About from './component/About';
import Contact from './component/ContactUs';
import HomeScreen from './screen/HomeScreen';
import CartScreen from './screen/CartScreen'
import Register from './screen/Regis'
import Login from './screen/Login';

import Payment from './screen/Payment';

function App() {
  return (
    <BrowserRouter>
    <Topbar/>
    
    <Routes>
      
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/cart" element={<CartScreen/>}/>
      <Route path="/home" element={ <Home />}/>
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/" element={<HomeScreen/>}/>
      <Route path="/payment" element={<Payment/>}/>
      
      </Routes>
    </BrowserRouter> 
  );
}

export default App;
