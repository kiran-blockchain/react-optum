import { useSelector } from "react-redux"

export const Counter =()=>{
    const count = useSelector((state)=>state.counter);
    return(
        <h1>Count: {count.value}</h1>
    )
}