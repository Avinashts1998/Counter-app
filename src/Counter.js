
import React, { useState } from 'react'
import './Counter.css'

function Counter() {
    let [count, setCount] = useState(0)

    const addCount = () => {
        setCount(count + 1)

    }

    const lessCount = () => {
        setCount(count - 1)

    }

    const resetCount = () => {
        setCount(count = 0)

    }

    return (
        <div className='bg-container'>
            <div className='number'>
                <h1 className='value'>{count}</h1>
            </div>
            <div className='buttons-area'>
                <button onClick={addCount} className='add-button'>Add</button>
                <button onClick={resetCount} className='add-button'>Reset</button>
                <button onClick={lessCount} className='add-button'>Less</button>


            </div>

        </div>

    )
}

export default Counter;
