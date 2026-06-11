import React from 'react'
import logo from './assets/hero.png'
import Image_1 from './assets/image-1.avif'

const SayGreeting = (props) => {
    const { name, age, isdeveloper, user, onClick, books } = props
    return (
        <React.Fragment>
            <div>Hi {name}</div>
            <div>Your {age}</div>
            <div>Developer {isdeveloper ? "Yes" : "No"}</div>
            <div>User Developer {user.isdeveloper ? "Yes" : "No"}</div>
            <div>User Developer {user.name}</div>
            <button onClick={onClick}>Click Me</button>
            {books.map((book, index) => (
                <div key={index}>
                    <div>{book.name}</div>
                    <div>{book.rate}</div>
                </div>
            ))
            }

            <img src={logo} alt="" width={100} />
            <img src={Image_1} alt="" width={100} />
        </React.Fragment>
    )
}

export default SayGreeting
