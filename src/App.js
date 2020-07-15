import React, { useState, useEffect } from "react";
import axios from 'axios'
import "./App.css";
import NasaDaily from './NasaDaily'
import DailyExplanation from './DailyExplanation'
import Inspire from './Inspire'


function App() {
  const [nasa, setNasa] = useState([])

  useEffect(()=>{
    axios.get('https://api.nasa.gov/planetary/apod?api_key=U5sBnDk4975scDRKeLeCTNpEq4zjI92m7wIXIafC')
    .then(res =>{
      setNasa(res.data)
    })
    .catch(err =>{
       debugger
    })
  }, [])
  console.log(nasa)

  return (
    <div className="App">
        <Inspire nasa= {nasa} />
        <NasaDaily nasa= {nasa} />
        <DailyExplanation nasa= {nasa} />
        
      
    </div>
  );
}


export default App;


