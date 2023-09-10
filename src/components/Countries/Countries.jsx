
import { useEffect } from 'react';
import { useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);

    const [visitedCountries, setVisitedCountries] = useState([]);

    const [visitedFlags, setVisitedFlags] = useState([]);


    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])

    const handleVisitedCountry = country => {
        // visitedCountries.push(country);
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    const handleVisitedFlag = (flag) => {
        const newVisitedFlags = [...visitedFlags, flag]
        setVisitedFlags(newVisitedFlags);
    };

    // remove item form a list an array in a state
    // use filter to select all the elements



    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            {/* visited countries */}
            <div>
                <h5>Visited Countries: {visitedCountries.length}</h5>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>

            {/* visited flags */}
            <div className='flag-container'>
                {
                    visitedFlags.map((flag, index) =>
                        <img key={index} src={flag} alt="" />
                    
                    )
                }
            </div>
            <div className='country-container'>
            {
                countries.map(country => <Country country={country} handleVisitedCountry = {handleVisitedCountry} handleVisitedFlag={handleVisitedFlag} key={country.cca3}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;