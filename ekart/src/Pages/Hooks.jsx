//useCallback

import { useCallback, useState } from "react";

const ChildComponent = ({ list, addNew }) => {
    console.log('Child Rendering');
    return (
        <div>
            <h4>List of Products</h4>
            {list.map((item, index) => {
                return <p key={index}>{item}</p>
            })}
            <button class="btn btn-primary" onClick={addNew}>Add New</button>
        </div>
    )
}

export const HooksComponent = () => {
    const [count, setCount] = useState(0);
    const [products, setProducts] = useState([]);
    const addNew = useCallback(() => {
        setProducts((i) => [...i, "new item"]);
    }, [products])

    return (<div>
        <ChildComponent list={products} addNew={addNew} />
    </div>)

}