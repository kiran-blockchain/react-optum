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
import {ProductList} from "./components/ProductList"
import { NewProduct } from "./Pages/NewProduct";
import { HooksComponent } from "./Pages/Hooks";
import { MemoHook } from "./Pages/MemoHook";
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
            <Route path="/products" element={<Products />}>
              <Route path=":id" element={<ProductList/>}/>
              <Route path="new" element={<NewProduct/>}/>
            </Route>
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NoMatch />} />
            <Route path="hooks" element={<HooksComponent />} />
            <Route path="memo" element={<MemoHook />} />
          </Routes>
          </Router>
          <Footer />
      </div>
      
  )
}

