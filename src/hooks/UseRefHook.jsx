import React, { useRef } from 'react'

const UseRefHook = () => {

    const inputRef = useRef();
    console.log(
        inputRef, "inputRef"
    )
    const handleClick = () => {
        inputRef.current.style = "background-color: red; color: white; font-size: 20px; padding: 10px; border-radius: 5px;"
    }

    return (
        <>
            <input type="text" ref={inputRef} className='p-2 border-2 rounded-sm max-w-2xl ' />
            <button onClick={handleClick} className='bg-teal-600 rounded-lg p-2'>Click me </button>
        </>
    )
}

export default UseRefHook
