import React, { useEffect, useMemo, useState } from 'react'

const RefExample = () => {
    const [count, setCount] = useState(0);

    const calculation = (num) => {
        for (let index = num; index <= 1000000000; index++);

        console.log('Total Count:', count);

        return count * 2;
    };

    // const totalCount = calculation(count);
    const totalCount = useMemo(() => calculation(count), [count]);

    console.log("count")
    const incrementState = () => {
        setCount(count + 1);
    }

    return (
        <>
            <h1>Count:{count}</h1>

            <button className='bg-red-800 p-2 rounded-sm' onClick={incrementState}>Increament State</button>
            {/* <button className='bg-blue-800 p-2 rounded-sm' onClick={ }>Total Count</button> */}
            <p>{totalCount}</p>
            {/* <button className='bg-cyan-800 p-2 rounded-sm' onClick={() => incrementRef()}>Increament Ref</button> */}
        </>
    )
}

export default RefExample
