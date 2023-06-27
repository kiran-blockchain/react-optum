import { useSelector } from "react-redux"

export const Counter =()=>{
    const count = useSelector((state)=>state.counter.value);
    return(
        <h1>Count: {count}</h1>
    )
}