import { createContext, useContext, useEffect, useState } from "react"
import { AuthInfo } from "./AuthContext";
import axiosInstance from "../Axios/axiosInstance";
import Swal from "sweetalert2";


export const UserInfo = createContext(null);


const UserContext = ({ children }) => {
    const [accountInfo, setAccountInfo]=useState(null);
    const { authEmail } = useContext(AuthInfo);


    useEffect(()=>{
        if (authEmail) {
            axiosInstance.get(`/userData?email=${authEmail}`)
            .then(res =>{
                if(res.data){
                    setAccountInfo(res.data);
                    Swal.fire({
                        position: "top-end",
                        title: `Welcome ${res.data.name}`,
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
            })
        }
    },[authEmail])


    // auth povider result
    const result = {
        accountInfo,
    };
    return (
        <UserInfo.Provider value={result}>
            {children}
        </UserInfo.Provider>
    )
}
export default UserContext