import React, { useState } from 'react'
import { useEffect } from 'react'

const UseEffectHook = () => {
    const [count, setCount] = useState(0)
    const [total, setTotal] = useState(0)
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    // useEffect(() => {
    //     first

    //     return () => {
    //         second
    //     }
    // }, [third])

    // useEffect(() => {
    //     console.log("first")
    //     // alert("Count has been updated: " + count)
    // }, [count, total])


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                setData(data)
                setLoading(false)
            })
    }, [])

    console.log(data, "data===0-0-0-")

    return (
        <div>
            <h1>UseEffectHook</h1>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)} className='bg-red-300 rounded-sm p-2'>Increment</button>
            <p>{total}</p>
            <button onClick={() => setTotal(total + 1)} className='bg-green-300 rounded-sm p-2'>Increment Total</button>

            {loading ? (
                <p>Loading...</p>
            ) : (
                data.map(item => (
                    <div key={item.id}>
                        <p>{item.name}</p>
                        <p>{item.email}</p>
                    </div>
                ))
            )}
        </div>

    )
}

export default UseEffectHook
