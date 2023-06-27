import { useState } from "react";
import { Counter } from "./components/Counter";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

import {BrowserRouter as Router} from 'react-router-dom'
import { Route,  Routes } from "react-router-dom";
import { Login } from "./Pages/Login";
import { Register } from "./Pages/Register";
import { Products } from "./Pages/Products";
import { Cart } from "./Pages/Cart";
import { NoMatch } from "./Pages/NoMatch";
//Always component name should start with Capital Letter
export const App = () => {
  //Divide component into two parts
  //1. logical area
  //2. presentational area
  //Logical Area begins
  const company = 'Optum';

  const [selectedProducts, setSelectedProduct] = useState([]);
  const [counter, setCounter] = useState(10);
  //counter intial value =10
  //updateCounter is a function where we will pass new value that need to be updated.


  const increment = (data) => {
    console.log(data);
    setCounter(counter + 1);
  }

  return (
      <div className="container-fluid">
        <Router>
        <Header companyName={company} />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
          </Router>
          <Footer />
      </div>
      
  )
}

