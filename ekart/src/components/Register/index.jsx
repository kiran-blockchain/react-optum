import { useState, useEffect } from "react"
import { CountryList } from "../../constants/countrylist";
import axios from "axios";
import { useFetch } from "../../hooks/useFetch";

export const RegisterComponent = () => {
    const [person, setPersonDetails] = useState({});
    //const [countries, setCountryList] = useState([])
    const [countries, isLoading, hasError] = useFetch({ url: 'https://restcountries.com/v2/all', method: 'get' })

    const handleInputChanges = (e) => {
        setPersonDetails({ ...person, [e.target.name]: e.target.value });
    };

    const loader = () => { return isLoading ? "Fetching Countries....." : "" }
    const error = () => { return hasError != null ? hasError : "" }
    const bindCountries = () => {
        return (

            <div class="row mt-3">
                <select id="country"
                    className="form-control"
                    name="country"
                    value={person.country}
                    onChange={(e) => {
                        handleInputChanges(e);
                    }}>
                    <option value="">Select Country</option>
                    {bindOptions(countries)}
                </select>
            </div>
        )
    }
    const bindOptions = (list = [], index) => {
        if (list != null) {
            
            return list.map(x => {
                return (<option key={index} value={x.alpha2Code}>{x.name}</option>)
            })
        }

    }



    const bindGender = () => {
        return (
            <div class="row mt-3">
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="gender" id="male" value="M"
                        checked={person.gender == 'M'} onChange={e => {
                            handleInputChanges(e)
                        }} />
                    <label class="form-check-label" for="male">Male</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="gender" id="fem" value="F"
                        checked={person.gender == 'F'}
                        onChange={e => {
                            handleInputChanges(e)
                        }} />
                    <label class="form-check-label" for="female">Female</label>
                </div>

            </div>
        )
    }
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
        {loader()}
        {error()}
        {bindCountries()}
        {bindGender()}

        <h6>{JSON.stringify(person)}</h6>

    </>)
}