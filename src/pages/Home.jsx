import React, { useEffect, useReducer, useState } from "react";
import { baseUrl } from "../store/axiosinstance";

const reducer = (state, action) => {

    switch (action.type) {
        case "SET_DATA":
            return {
                ...state, ...action.payload

            }
            break;
        case "UPDATE_NAME":
            return {
                ...state, name: action.payload

            }
            break;
        case "UPDATE_ICON":
            return {
                ...state, icon: action.payload
            }
            break;

        default:
            return state;
            break;
    }

}

const initialState = {
    name: "",
    icon: ""
}

const Home = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [menuType, setMenuType] = useState([]);
    const [editId, setEditId] = useState(null)

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

    const createMenuType = async (e, value) => {
        e.preventDefault()
        console.log(value)
        try {
            if (editId) {
                console.log("UPDATE")
                const response = await baseUrl.put(`/menu/type/${editId}`, value);
            } else {
                console.log("CREATE")
                const response = await baseUrl.post("/menu/type", value);
            }
            // console.log(response);

            const data = {
                name: "",
                icon: ""
            }
            await dispatch({
                type: "SET_DATA",
                payload: data
            })
            await getMenuType();
        } catch (error) {
            console.log(error);
        }
    };

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
        setEditId(item.id)
        dispatch({
            type: "SET_DATA",
            payload: item
        })
    }

    console.log(editId)
    return (
        <div>

            <form action="">
                <input className="border rounded-sm p-3" type="text" value={state.name} onChange={(e) => dispatch({
                    type: "UPDATE_NAME",
                    payload: e.target.value
                })} />
                <input className="border rounded-sm p-3" type="text" value={state.icon} onChange={(e) => dispatch({
                    type: "UPDATE_ICON",
                    payload: e.target.value
                })} />

                <button
                    onClick={(e) => createMenuType(e, state)}
                    className="bg-red-700 p-2 rounded-lg"
                >
                    Submit Data
                </button>
            </form>
            <h1>Hello</h1>
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
    );
};

export default Home;
