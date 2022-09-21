import React from 'react'
import { useState, useEffect } from 'react'


export function Odd ({num}) {
    const [oddNum, setOddNum] = useState({
        odd: [num],
})


    useEffect(() => {
        setOddNum({
            odd: num
        })
    }, [num])

    function handleRemove(event) {
        const newItems = oddNum.odd
        newItems.splice(event.target.name, 1)
        console.log(newItems);
        setOddNum({
            odd: newItems
        })
    }

    return (
        <div>
        <h2>Odd:</h2>
            <ul>
                 {oddNum.odd.map((item, index) => <li key={index}>{item} <button onClick={handleRemove}>delete</button></li>)}
            </ul>
        </div>
    )
}