import { useState } from "react"

export const Register = () => {
    const [person, setPersonDetails] = useState({});

    const handleInputChanges = (e) => {
        setPersonDetails({...person,[e.target.name]: e.target.value });
    };
    return (<>
        <div class="row mt-3">
            <input type='text'
                className="form-control"
                placeholder="Enter First Name"
                name='firstName'
                id='firstName'
                value={person.firstName}
                onChange={(evt) => {
                    handleInputChanges(evt);
                }}
            />
        </div>
        <div class="row  mt-3">
            <input type='text'
                className="form-control"
                placeholder="Enter Last Name"
                name='lastName'
                id='lastName'
                value={person.lastName}
                onChange={(evt) => {
                    handleInputChanges(evt);
                }}
            />
        </div>
        <div class="row  mt-3">
            <input type='text'
                className="form-control"
                placeholder="Enter Age"
                name='age'
                id='age'
                value={person.age}
                onChange={(evt) => {
                    handleInputChanges(evt);
                }}
            />
        </div>
        <h6>{JSON.stringify(person)}</h6>

    </>)
}