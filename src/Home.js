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
    } 

    function handleShowOdd() {
        setShowOdd(true)    
    }
    
    function handleShowEven() {
        setShowEven(true)  

    } 

    function handleRemove(index){
        const newOdd = odd;
        const evenElementRemoved = newOdd.splice(index, 1)
        setEven((prevState) => [...prevState, ...evenElementRemoved])
        setOdd(newOdd)
    }

    function handleDelate(index){
        const newEven = even;
        const evenElementRemoved = newEven.splice(index, 1)
        setOdd((prevState) => [...prevState, ...evenElementRemoved])
        setEven(newEven)
    }


    return (
        <div>
            <h2>Il Testo è: {data}</h2>
                <button onClick={handleAddData}>Add</button>
                <button onClick={handleShowOdd}>Odd</button>
                <button onClick={handleShowEven}>Even</button>    
            {showOdd && <Odd num={odd} remove={handleRemove}/>}
            {showEven && <Even num={even} delate={handleDelate}/>}
        </div>
       
    )
} 

//In Odd e Even ho eliminato tutto ciò che riguardava lo state perché era superfluo e così in questo modo 
//{odd} e {even} della righe 66 e 67 sono utilizzabili. Dal componente padre Home poi li passo ai figli

//Spostare da odd a even e viceversa gli elementi al click sul remove. In home devo avere un metodo che posso passare in odd e even per poter effettuare l'operazione