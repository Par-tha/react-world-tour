import { useState } from 'react';
import './Country.css';
const Country = ({country, handleVisitedCountry}) => {
    const {name, flags, population, area, capital,cca3} = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () =>{
        setVisited(!visited);
    }
     
        
    return (
        <div className={`country ${visited && 'visited'}`}>
            <h2 style={{color: visited ? 'Red' : 'white'}}>Name: {name?.common}</h2>
            <img src={flags.png} alt="" />
            <h4>Capital : {capital}</h4>
            <p>Population : {population}</p>
            <p>Area : {area}</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={() => handleVisitedCountry(country)}>Mark Visited</button> <br />
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            {visited ? 'I have visited this country' : 'I want to visit'}
        </div>
    );
};

export default Country;