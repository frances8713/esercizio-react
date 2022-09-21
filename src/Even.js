import React from 'react'
import { useState, useEffect } from 'react'


export function Even ({num}) {
    const [evenNum, setEvenNum] = useState({
        even: [num],
    })

    useEffect(() => {
        setEvenNum({
            even: num
        })
    }, [num])

    function handleRemove(event) {
        const newItems = evenNum.even
        newItems.splice(event.target.name, 1)
        setEvenNum({
            even: newItems
        })
    }

    return (
        <div>
            <h2>Even:</h2>
            <ul>
                 {evenNum.even.map((item, index) => <li key={index}>{item} <button onClick={handleRemove}>delete</button></li>)}
            </ul>      
        </div>
    )
}




