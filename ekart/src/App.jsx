import { useState } from "react";
import { Counter } from "./components/Counter";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Register } from "./components/Register";
import { ProductList } from "./components/ProductList";
import { ProductsContext } from "./context/ProductsContext";

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
    <div class="container-fluid">
      <ProductsContext.Provider value={{selectedProducts,setSelectedProduct}}>
        <Header companyName={company} />
        <div className="container mt-5">
          <div class="row">
            {/* <div class="col-md-4">
            <Counter inc={increment} />
            <h6>{counter}</h6>
            <Register/>
          </div> */}
            <ProductList />
          </div>
        </div>
        <Footer />
      </ProductsContext.Provider>
    </div>
  )
}

