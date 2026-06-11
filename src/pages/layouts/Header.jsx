import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <ul style={{ color: 'red', backgroundColor: "yellowgreen", display: "flex", justifyContent: "center", gap: "10px" }}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </div>
    )
}

export default Header
