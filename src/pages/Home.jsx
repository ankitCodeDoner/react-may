import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <Link to={"/add-menu"} className='bg-cyan-900 rounded p-2'>
                ADD MENU
            </Link>
        </div>
    )
}

export default Home
