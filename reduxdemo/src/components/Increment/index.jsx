import { useDispatch } from "react-redux"
import {update,decrement} from '../../store/reducer'

export const Increment =()=>{
    const dispatch = useDispatch();
    return(
        <button onClick={
            (e)=>{
                dispatch(update(100))
            }
        }>Increment</button>
    )
}