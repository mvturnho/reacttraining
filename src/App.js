import 'bootstrap/dist/css/bootstrap.min.css';
import {  FormControl } from 'react-bootstrap';

import React, { useState } from "react";

function App() {
  const [waarde,setWaarde]=useState(1);
  const [factor,setFactor]=useState(1);
  return (
    <div className='flex'>
      <FormControl className="m-4" type="number" onChange={(e) => {setWaarde(e.target.value)}} />
      <FormControl className="m-4" type="number" onChange={(e) => {setFactor(e.target.value)}} />
      <div>
        Waarde is : <h1>{waarde * factor}</h1>
      </div>
    </div>
  );
}


export default App;
