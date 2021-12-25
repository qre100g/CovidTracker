import {useEffect, useState} from 'react';

function FetchingData (props) {
    const [data, setData] = useState();
    useEffect(() => {
        fetch(`https://covid-193.p.rapidapi.com/statistics?country=${props.country}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "covid-193.p.rapidapi.com",
                "x-rapidapi-key": "62ad2338e8msh8a612dad982d309p128c89jsna8da92e0a484"
            }
        })
        .then(res => res.json())
        .then(response => {
            setData(response);
            console.log(response);
        })
        .catch(err => {
            console.error(err);
        });
    },[])
    return(<div>
        {console.log("-------",props.country)}
        {data ? <div>
            {data.response.map((e) => {
                return (<div>
                    <h3>Critical Cases: {e.cases.critical}</h3>
                    <h3>Active Cases: {e.cases.active}</h3>
                    <h3>Recovered: {e.cases.recovered}</h3>
                    <h3>Total Cases: {e.cases.total}</h3>
                </div>)
            })}
        </div> : <h1>Loading data</h1> }
    </div>)
}

export default FetchingData;