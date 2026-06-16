import React, { useEffect, useState } from 'react'
import { baseUrl } from '../store/axiosinstance'

const Home = () => {
    const [menuType, setMenuType] = useState([])

    const getMenuType = async () => {
        try {
            const response = await baseUrl.get("/menu/type");
            const data = response.data?.data
            setMenuType(data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getMenuType();
    }, [])

    console.log(menuType, "menuType")

    return (
        <div>
            <h1>Hello</h1>
            {
                menuType.map((item, idx) => {
                    return (
                        <div key={idx}>
                            {item.id}
                            {item.name}
                        </div>
                    )

                })
            }
        </div>
    )
}

export default Home
