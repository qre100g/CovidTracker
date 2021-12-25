import {useEffect, useState} from 'react';

function FetchingData (props) {
    const [data, setData] = useState();
    const [allCountryData, setCountryData] = useState();
    useEffect(() => {

        {props.alldata 

        ?
            setData(props.alldata)
        : 
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
        }

    },[])
    return(<div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly'
    }}>
        {console.log("-------",props.country)}
        {data ? <>
            {data.response.map((e) => {
                return (<div style={{
                    color: 'white',
                    border: '1px solid black',
                    borderRadius: '10px',
                    padding: '10px',
                    margin: '10px 10px'
                }}>
                    <span style={{
                        fontSize: '30px',
                        fontWeight: '700',
                        color: 'black',
                        textTransform: 'capitalize',
                        borderBottom: '3px solid',
                        width: 'auto',
                    }}>
                        {data.results > 10 ? <span>{e.country}</span> : <span>{data.parameters.country}</span>}
                    </span>
                    <h3>Total Cases: {e.cases.total}</h3>
                    <h3>Critical Cases: {e.cases.critical}</h3>
                    <h3>Active Cases: {e.cases.active}</h3>
                    <h3>Deaths: {e.deaths.total}</h3>
                    <h3>Recovered: {e.cases.recovered}</h3>
                </div>)
            })}
        </> : <h1>Loading data</h1> }
    </div>)
}

function FetchAllData () {
    const [allData, setAllData] = useState();
    useEffect(() => {
        fetch("https://covid-193.p.rapidapi.com/statistics", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "covid-193.p.rapidapi.com",
                "x-rapidapi-key": "62ad2338e8msh8a612dad982d309p128c89jsna8da92e0a484"
            }
        })
        .then(res => res.json())
        .then(response => {
            setAllData(response)
            console.log(response);
        })
        .catch(err => {
            console.error(err);
        });
    }, [])
    return (<div>
        { allData ? <>
            <FetchingData alldata = {allData}/>
        </> : <>Loading</>}
    </div>)
}
export {FetchAllData} ;

export default FetchingData;