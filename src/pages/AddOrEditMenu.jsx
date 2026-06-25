import React, { useEffect, useReducer, useState } from 'react'
import { baseUrl } from '../store/axiosinstance';
import { useNavigate, useParams } from 'react-router-dom';

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

const AddOrEditMenu = () => {
    const { id } = useParams()
    // console.log(params, "PARAMS")
    console.log(id, "ID")
    const navigate = useNavigate();
    const [state, dispatch] = useReducer(reducer, initialState)
    const [editId, setEditId] = useState(null)


    const getMenuType = async (id) => {
        try {
            const response = await baseUrl.get(`/menu/type/${id}`);
            const data = response.data?.data;
            dispatch({
                type: "SET_DATA",
                payload: data
            })
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        if (id) {
            getMenuType(id);
        }
    }, []);
    const createMenuType = async (e, value) => {
        e.preventDefault()
        console.log(value)
        try {
            if (id) {
                console.log("UPDATE")
                const response = await baseUrl.put(`/menu/type/${id}`, value);
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
            navigate("/list")
        } catch (error) {
            console.log(error);
        }
    };

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
        </div>
    );
};

export default AddOrEditMenu
