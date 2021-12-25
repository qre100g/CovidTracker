import { useEffect, useState } from "react"
import FetchingData from "./FetchData";

function SearchCountry (props) {
    const [valid, setValid] = useState(false);
    useEffect( () => {
        fetch(`https://covid-193.p.rapidapi.com/countries?search=${props.country}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "covid-193.p.rapidapi.com",
                "x-rapidapi-key": "62ad2338e8msh8a612dad982d309p128c89jsna8da92e0a484"
            }
        })
        .then(res => res.json())
        .then(response => {
            
            if(response.results === 1) {
                console.log("Valid")
                setValid(true);
                console.log(response);
            }
            else {
                console.log("Not Valid");
                setValid(false);
            }
        })
        .catch(err => {
            console.error(err);
        });
    })

    return(<div>
        <h1>hello {props.country},</h1>
        {valid ? <FetchingData country = {props.country} /> : <h1>Enter Correct Name</h1>}
    </div>)
}

export default SearchCountry;
