import React, { useEffect, useState } from 'react'
import Child1 from './home/Child1'
import { baseUrl } from '../store/axiosinstance'

const Home = () => {

    const [menuTypes, setMenuTypes] = useState([])

    const getMenuType = async () => {
        try {
            const response = await baseUrl.get('/menu/type')
            setMenuTypes(response.data?.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getMenuType();
    }, [])

    console.log(menuTypes, "menuTypes")
    return (
        <div>
            {
                menuTypes.map((item, idx) => (
                    <div key={idx}>
                        {item.name}
                    </div>
                ))
            }
        </div>
    )
}

export default Home
