import { useState } from 'react'
import Form from './components/Form'
import FormObject from './components/FormObject'; // Make sure the path is correct


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <Form/> */}
        <FormObject/>
      </div>
    </>
  )
}

export default App
