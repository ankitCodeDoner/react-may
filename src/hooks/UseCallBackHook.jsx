import React, { useCallback, useState } from 'react'
import Child from './Child'

const UseCallBackHook = () => {

    const [count, setCount] = useState(0)

    const [text, setText] = useState("")

    const handleClick = useCallback(() => {
        console.log("Button Clicked")
    }, [])

    return (
        <div>
            <h1>
                Count:-  {count}
            </h1>
            <input className='border p-2' type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <button className='btn bg-cyan-950 p-2 rounded-sm' onClick={() => setCount(count + 1)}>Increment</button>
            <Child handleClick={handleClick} />
        </div>
    )
}

export default UseCallBackHook
