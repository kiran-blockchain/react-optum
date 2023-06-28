import { useEffect, useRef, useState } from "react"

export const Cart = () => {
    const [inputValue, setInputValue] = useState("");
    const [xyz,setXyz] = useState('')
    const inputElement = useRef();
    const previousInputValue = useRef("");
    let previousValue=''
    const focusInput = () => {
        inputElement.current.focus();
    }
    useEffect(() => {
        previousInputValue.current = inputValue
    }, [inputValue,xyz])
    return (
        <div>
             <input type="text"
                
                onChange={e => {
                    setXyz(e.target.value)
                }}
            />
            <input type="text"
                ref={inputElement}
                onChange={e => {
                    setInputValue(e.target.value)
                }}
            />
            <button class="btn btn-primary" onClick={e => {
                focusInput();
            }}>Click</button>
            <h4>Current Value:  {inputValue}</h4>
            <h4>Previous Value:  {previousValue}</h4>
        </div>
    )
}