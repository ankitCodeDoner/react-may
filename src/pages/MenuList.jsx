import React, { useEffect, useState } from 'react'
import { baseUrl } from '../store/axiosinstance';
import { useNavigate } from 'react-router-dom';

const MenuList = () => {
    const navigate = useNavigate();
    const [menuType, setMenuType] = useState([]);

    const getMenuType = async () => {
        try {
            const response = await baseUrl.get("/menu/type");
            const data = response.data?.data;
            setMenuType(data);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getMenuType();
    }, []);

    const handleDelete = async (id) => {
        // console.log(id, "ID")

        try {
            const response = await baseUrl.delete(`/menu/type/${id}`);
            console.log(response, "RESPONSE")
            await getMenuType();
        } catch (error) {
            console.log(error)

        }
    }


    const handleEdit = (item) => {
        console.log(item, "ITEM")
        navigate(`/add-menu/${item.id}`)
    }

    return (
        <div>
            <button className='bg-cyan-900 p-2 rounded' onClick={() => navigate("/add-menu")}>Add Menu</button>

            {menuType.map((item, idx) => {
                return (
                    <div key={idx}>
                        {item.id}
                        {item.name}
                        <button className="bg-green-700 p-2 rounded-lg" onClick={() => handleEdit(item)}>Edit</button>
                        <button className="bg-red-700 p-2 rounded-lg" onClick={() => handleDelete(item.id)}>Delete</button>
                    </div>
                );
            })}
        </div>
    )
}

export default MenuList
