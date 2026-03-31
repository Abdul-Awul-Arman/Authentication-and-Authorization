import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";



const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [userInfo, setUserInfo] = useState(null);
    const navigate = useNavigate();


    useEffect(()=>{
        fetchUserInfo();
    },[])


    const login = (paylod) => {

        axios.post("https://api.escuelajs.co/api/v1/auth/login", paylod)

            .then(res => {
                localStorage.setItem("token", JSON.stringify(res.data.access_token))
                fetchUserInfo();
                navigate("/dashboard")
            })
            .catch(error => { console.log(error) })
    };

    const logout = () => {
        localStorage.removeItem("token");
        navigate("/login")
    }

    const fetchUserInfo = () => {
        const rawToken = localStorage.getItem("token");
        if (!rawToken) return;

        try {
            const userToken = JSON.parse(rawToken);
            const headers = {
                headers: {
                    Authorization: `Bearer ${userToken}`
                }
            };

            axios.get("https://api.escuelajs.co/api/v1/auth/profile", headers)
                .then(res => {
                    setUserInfo(res.data);
                })
                .catch(error => {
                    console.log("Error fetching profile:", error);
                });
        } catch (e) {
            console.error("Invalid token in localStorage", e);
        }


    }

    return (
        <AuthContext.Provider value={{ userInfo, login, logout, fetchUserInfo }}>
            {children}
        </AuthContext.Provider>
    )

}

export const useAuth = () => {
    return useContext(AuthContext);
}