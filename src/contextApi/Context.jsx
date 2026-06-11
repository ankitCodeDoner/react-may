import { createContext } from "react";

export const UserContext = createContext();


const Context = ({ children }) => {
    let name = "ankit"
    return (
        <UserContext.Provider value={{ name }}>{children}</UserContext.Provider>
    )
}

export default Context
