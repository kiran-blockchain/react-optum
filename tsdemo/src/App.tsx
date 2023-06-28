import React from 'react';
import logo from './logo.svg';
import './App.css';
import { IProduct } from './interface/IProduct';
import { Product } from './entities/product';

 const App =()=>{
  const product = new Product();
  product.name='iPhone';
  product.url='http:///';
  product.id='1';

  let product:IProduct;
  product.addProduct(Product);

  return(
    <h1>I am the Tyepsciprt demo

    </h1>
  )
 }

export default App;
