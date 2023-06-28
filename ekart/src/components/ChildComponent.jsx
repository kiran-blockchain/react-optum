export const ChildComponent = ({ list, addNew }) => {
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