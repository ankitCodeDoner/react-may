import React, { useEffect } from 'react'

const Home = () => {

    const getMenuType = () => {
        console.log("first")
    }
    useEffect(() => {
        getMenuType()
    }, [])

    return (
        <div>Home</div>
    )
}

export default Home
