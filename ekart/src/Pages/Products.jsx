import { useParams,Outlet, Link } from "react-router-dom"

export const Products=()=>{
    return(
        <div>
            <h1>Products</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/products/1">Products Link</Link>
                    </li>
                    <li>
                        <Link to="/products/new">Add New Product</Link>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </div>
    )
}