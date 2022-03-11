import logo from './logo.svg';
import {React, useEffect, useState} from 'react';

import './App.css';

function App() {
   useEffect(() => {
     getServerData();
   },[]);

  const [data, setDate] = useState(""); 

  const getServerData = async() => {
    await fetch('http://localhost:3001', {
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
     },
      method: 'Get',
    })
    .then(res => {
      console.log(res);
      console.log(typeof(res));
      return res.json();
    })
    .then(res => setDate(res.text));
    }

  return (
    <div className="App">
      {data}
    </div>
  );
}

export default App;
