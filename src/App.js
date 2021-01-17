import { Router } from "@reach/router";
import { useState } from 'react';
import Display from './Components/Display';
import Form from './Components/Forms';

function App() {
  // store the selection data + re-set initial values
  const [data, setData] = useState({
    select: 'ability',
    id: 1
  })
  
  return (
    <div>
      <h1>App</h1>
      
      <Form formInputs={data} updateFormInputs={setData} />
      
      <Router>
        <Display path="/:category/:id" />
      </Router>

    </div>
  )
}

export default App;