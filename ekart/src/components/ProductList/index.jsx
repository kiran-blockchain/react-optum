import { useEffect, useState } from "react";
import { Product } from "./Product";
import axios from "axios";

export const ProductList = () => {
    const [products, setProducts] = useState([]);
    const list = () => {
        return products.map((item,index) => {
            return <Product key={index} data={item} />
        });
    }
    useEffect(() => {
        axios.get('https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json').then(result => {
            setProducts(result.data);
        }).catch(ex => {
            console.log(ex);
        })
    }, [])

    return (
        <div class="row">
            {list()}
        </div>
    )
};