import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { FormControl } from 'react-bootstrap';

import React, { useState } from "react";

import MyComponent from './MyComponent'

function App() {
  const [waarde, setWaarde] = useState(1);
  const [factor, setFactor] = useState(1);
  return (
    <div className='App makered flex'>
      <FormControl className="w-100 p-3 bg-info text-white" type="number" onChange={(e) => { setWaarde(e.target.value) }} />
      <FormControl className="w-100 p-3 bg-warning text-dark" type="number" onChange={(e) => { setFactor(e.target.value) }} />
      <MyComponent waarde={waarde} factor={factor} />
    </div>
  );
}


export default App;
