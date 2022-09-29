import React from 'react'
import { useState, useEffect } from 'react'


export function Odd ({num, remove}) { 
    // const [oddNum, setOddNum] = useState({ odd: [num] })


    // useEffect(() => {
    //     setOddNum({
    //         odd: num
    //     })
    // }, [num])

    // function handleRemove(event) {
    //     console.log(event.target.name)

    //     const newItems = oddNum.odd
    //     newItems.splice(event.target.name, 1)
    //     // console.log(newItems);
    //     // const prova = oddNum.odd.find((e, index) => event.target.name === index)
        
    //     setOddNum({
    //         odd: newItems
    //     })
    // }


    return (
        <div>
        <h2>Odd:</h2>
            <ul>
                 {num.map((item, index) => <li key={index}>{item}
                 <button onClick={() => remove(index)}>delete</button></li>)}
            </ul>
        </div>
    )
} 