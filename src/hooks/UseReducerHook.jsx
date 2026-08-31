import React, { useReducer } from 'react'


const reducer = (state, action) => {
    switch (action.type) {
        case "UPDATE_NAME":
            return {
                ...state,
                name: action.payload
            }

        case "UPDATE_EMAIL":
            return {
                ...state,
                email: action.payload
            }
        case "SET_LOADING":
            return {
                ...state,
                loading: action.payload
            }
            break;

        default:
            return state
            break;
    }

}

const initialState = {
    name: "",
    email: "",
    loading: false
}


const UseReducerHook = () => {
    const [state, dispatch] = useReducer(reducer, initialState);


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(state);
    }


    return (
        <div>
            <form>
                <input type="text" className='border p-2 rounded-sm' value={state.name} onChange={(e) => dispatch({
                    type: "UPDATE_NAME",
                    payload: e.target.value
                })} />
                <input type="text" className='border p-2 rounded-sm' value={state.email} onChange={(e) => dispatch({
                    type: "UPDATE_EMAIL",
                    payload: e.target.value
                })} />
                <button className='p-2 bg-cyan-900 rounded-sm' onClick={(e) => handleSubmit(e)}>Submit</button>
            </form>
        </div>
    )
}

export default UseReducerHook
