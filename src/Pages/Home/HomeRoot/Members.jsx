import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { UserInfo } from "../../../Context/UserContext"
import axios from "axios";
import axiosInstance from "../../../Axios/axiosInstance";
import EachMember from "../../../Component/EachMember";



const Members = () => {
    const [allusers, setAllUsers]= useState([]);
    const {accountInfo}= useContext(UserInfo);
    const isAdmin = accountInfo?.department === 'Admin';

    useEffect(()=>{
        axiosInstance.get('/users')
        .then(res => setAllUsers(res.data))
        .catch(error => console.log(error));
    },[])

    return (
        // universel class for all Nested Routes this w-class mean height in lg divice
        <div className="m-4 xl:m-10 lg:w-full space-y-20">
            {/* this button show only for admin */}
            {
                isAdmin && <Link to={'/add_member'}>
                <button className="btn md:px-8 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-xl font-bold">New Member Add</button>
            </Link>
            }
            <section className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>User</th>
                            <th>Position</th>
                            <th>Gender</th>
                            <th>More Info</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            allusers.map((each, inx) => <EachMember key={inx} user={each}></EachMember>)
                        }
                    </tbody>
                </table>
            </section>
        </div>
    )
}
export default Members