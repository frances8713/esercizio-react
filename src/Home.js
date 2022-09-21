import React, { useEffect } from 'react'
import { useState, UseEffect } from 'react'
import { Odd } from './Odd'
import { Even } from './Even'

export function Home () {
    const [data, setData] = useState('')
    const [even, setEven] = useState([])
    const [odd, setOdd] = useState([])

    const [showOdd, setShowOdd] = useState(false)
    const [showEven, setShowEven] = useState(false)

    async function fetchRandomApi () {
        const response = await fetch(`http://numbersapi.com/random/math`)
        const text = await response.text()
        setData(text)
        // console.log(response)
        const number = text.split(' ')[0]

        if(number % 2 === 0) {
            setEven((even) => [...even, text]) 
        } else {
            setOdd((odd) => [...odd, text])
        }
    } 

    useEffect(() => {
        fetchRandomApi ()
    }, [])


    function handleAddData() {
        fetchRandomApi()
        // setData(data)
    } 

    function handleShowOdd() {
        setShowOdd(true)
    }
    function handleShowEven() {
        setShowEven(true)
    }


    return (
        <div>
            <h2>Il Testo è: {data}</h2>
                <button onClick={handleAddData}>Add</button>
                <button onClick={handleShowOdd}>Odd</button>
                <button onClick={handleShowEven}>Even</button>    
            {showOdd && <Odd num={odd}/>}
            {showEven && <Even num={even}/>}
        </div>
       
    )
}