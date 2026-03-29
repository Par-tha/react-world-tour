import { useEffect, useState } from "react";
import Country from "./Country";
import './countries.css'

const Countries = () => {

    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    // const [visitedFlags, setVisitedFlags] = useState([]);

    useEffect(() => {
        fetch('https://studies.cs.helsinki.fi/restcountries/api/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    const handleVisitedCountry = country =>{
         console.log('sdd this visited country');
         const newVisitedCountries = [...visitedCountries, country];
         setVisitedCountries(newVisitedCountries);
    }

    // const handleVisitedFlags = flag => {
    //     console.log('flag adding');
    // }

    return (
        <div>
            <h3>Countries : {countries.length}</h3>
            <div>
                <h4>Visited Countries : {visitedCountries.length}</h4>
                <ul>
                    {
                        visitedCountries.map(country =><li key = {country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>
            <div className="country-container">
                {
                    countries.map(country => <Country key={country.cca3} handleVisitedCountry = {handleVisitedCountry} country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;