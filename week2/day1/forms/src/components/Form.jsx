import React from 'react'
import { useState } from 'react'

function Form() {
    const [homeName, setHomeName] = useState('')
    const [offer, setOffer] = useState(0)

    const handleHomeName = (e) => {
        // console.log(e.target.value)
        setHomeName(e.target.value)
    }

    const handleOffer = (e) => {
        // console.log(e.target.value)
        setOffer(e.target.value)
    }

    const buyHome = (e) => {
        e.preventDefault()
        const application = {homeName, offer}
         console.log(application)
         setHomeName('')
         setOffer(0)
    }

  return (
    <div >
        <h1>Buy a home!</h1>
        <form onSubmit={buyHome}>
            <label>Home:</label>
            <input type="text" value={homeName} onChange={handleHomeName}/>
            <label>offer:</label>
            <input type="number" value={offer} onChange={handleOffer}/>
            <button>Submit</button>
        </form>
        <p></p>
    </div>
  )
}

export default Form