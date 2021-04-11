import React from 'react';

const Country = (props) => {
    const {name, population, region, flag} = props.country
    const countryStyles ={
        border:'1px solid gray',
        margin: '10px',
        padding: '10px'
    }
    const handleCountry = props.handleCountry
    
    return (
        <div style={countryStyles}>
            <h1>This is {name}</h1>
            <img style={{height: '50px', width: '50px'}} src={flag} alt=""/>
            <p>Population {population}</p>
            <p><small>Region  : {region}</small></p>
            <button onClick={() => handleCountry(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;