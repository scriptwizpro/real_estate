import { createContext } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user"))
);
    return <AuthContext.Provider value={{}}> {children} </AuthContext.Provider>;
};