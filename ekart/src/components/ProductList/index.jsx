import { useEffect, useState } from "react";
import { Product } from "./Product";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/productSlice";

export const ProductList = () => {
    const dispatch = useDispatch();
    const {products,isLoading,error,cart} = useSelector(state=>state.product);
    const showProducts = () => {
        return products.map((item,index) => {
            return <Product key={index} data={item} />
        });
    }
    const showLoader =()=>{
        return isLoading?"Loading Products":""
    };
    const showError=()=>{
        return error==null?"":"Error in fetching products";
    }
    useEffect(()=>{
        dispatch(fetchProducts())
    },[dispatch])
    return (
        <div class="row">
            {showLoader()}
            {showError()}
            {showProducts()}
        </div>
    )
};