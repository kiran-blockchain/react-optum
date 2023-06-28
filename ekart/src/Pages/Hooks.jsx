//useCallback

import { useCallback, useState } from "react";
import { ChildComponent } from "../components/ChildComponent";



export const HooksComponent = () => {
    const [count, setCount] = useState(0);
    const [products, setProducts] = useState([]);
    const addNew = useCallback(() => {
        setProducts((i) => [...i, "new item"]);
    }, [products])
    // const addNew = ()=>{
    //     setProducts((i) => [...i, "new item"]);
    // }

    return (<div>
        <div>
        <h6>Count: {count}</h6>
        <button class="btn btn-warning" onClick={e=>{
            setCount((c)=>c+1)
        }}>+</button>
        </div>
        <ChildComponent list={products} addNew={addNew} />
       
    </div>)

}