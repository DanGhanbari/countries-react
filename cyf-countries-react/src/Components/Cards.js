import React from 'react';
import data from ".././countriesAll.json";


const Cards = () => {
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    }
    return (
        <div>
               {data.map((x,key)=><ul key={key} className="bg-light p-2">
        <li><img src={x.flag} alt="countries flag"></img></li>
        <li className="pb-3 pt-2 font-weight-bold">{x.name} </li>
        <li>Population: {numberWithCommas(x.population)}</li>
        <li>Region: {x.region}</li>
        <li>Capital: {x.capital}</li>
        </ul>)}
            
        </div>
    )
}

export default Cards
