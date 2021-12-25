import './App.css';
import FetchingData from './Components/FetchData';
import img from './Images/covidImage.jpeg';
import image from './Images/covidImage1.jpeg';
import img2 from './Images/covid2.jpeg';
import { useEffect, useState } from 'react';
import SearchCountry from './Components/SearchCountry';

function App() {
  const [val, setVal] = useState('');
  const [countryName, setName] = useState();
  const [doFetch, setDoFetch] = useState(false);

  return (
    <div className="App">
      <img src={img2} alt='Covid' width='100%' height= '250px' />
      <input 
        type= 'search'
        placeholder='Enter the Country Name'
        value = {val}
        onChange={(e) => {
          setVal(e.target.value)
          setDoFetch(false)
        }}
        style={{
          fontSize: '16px',
          padding: '5px 20px',
          width: '60%',
          borderRadius: '19px',
          height: '40px'
        }}
      />
      <button onClick={() => {
        setName(val);
        setDoFetch(true);
      }} >Search</button>
      
      { doFetch ? <FetchingData country = {countryName} /> : <h1>Enter Valid Country</h1>}

      
    </div>
  );
}

export default App;