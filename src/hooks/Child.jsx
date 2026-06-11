import React from 'react'

const Child = React.memo(({ handleClick }) => {
    console.log("Re-render child")
    return (
        <div>
            <button onClick={handleClick} className='bg-purple-900 p-2 rounded-sm'> Click Me</button>
        </div>
    )
})

export default Child
