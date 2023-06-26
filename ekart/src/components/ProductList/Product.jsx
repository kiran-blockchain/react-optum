import { useContext } from "react"
import { ProductsContext } from "../../context/ProductsContext"

export const Product = (props) => {
    const { selectedProducts, setSelectedProduct } = useContext(ProductsContext);
    return (<div class="card col-md-3 mt-2">
        <img src={props.data.image} class="card-img-top" alt="" />
        <div class="card-body">
            <h5 class="card-title">{props.data.name}</h5>
            <p class="card-text">{props.data.price}</p>
            <button class="btn btn-primary" onClick={e => {
                setSelectedProduct([...selectedProducts,props.data]);
            }}>Add to Cart</button>
        </div>
    </div>)
}