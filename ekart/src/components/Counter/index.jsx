export const Counter = (props) => {

    return (<>
        <button className="btn btn-primary" onClick={()=>{
            props.inc();
        }}>Increment</button>
    </>)
}