import { useContext } from "react";
import { AuthInfo } from "../context/AuthContext";
import Swal from "sweetalert2";
import axiosInstance from "../Axios/axiosInstance";
// 
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";


const AddUser = () => {
    const { createAccount } = useContext(AuthInfo);

    const handleAddUser = (e) => {
        e.preventDefault();
        // define form
        const form = e.target;
        // 
        const firstName = form.name1.value;
        const lastName = form.name2.value;
        const email = form.email.value;
        const password = form.password.value;
        const department = form.department.value;
        const gender = form.gender.value;
        const age = form.age.value;
        const salary = form.salary.value;
        const img = form.img.value;
        // define data
        let obj;
        obj = { name: `${firstName} ${lastName}`, email, password, department, gender, age, salary, img };
        // alart
        Swal.fire({
            title: "Are you sure?",
            text: "Create This User!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                // call auth fire base
                createAccount(email, password)
                    .then(res => {
                        if (res.user.email) {
                            // post in data base
                            axiosInstance.post("/user", obj)
                                .then(res => {
                                    if (res.data.massage === "successfull") {
                                        form.reset();
                                        // show successfull alart
                                        Swal.fire({
                                            title: "Successfull.",
                                            text: "New User Added.",
                                            icon: "success"
                                        });
                                    }
                                })
                        }
                    })
            }
        });
    }

    return (
        <div className="m-4 xl:m-10 lg:w-full space-y-5">
            <Link to={'/member'} className="btn"> <FaArrowLeft /> back</Link>
            <h2 className="text-3xl text-center">Add New User</h2>
            <form onSubmit={handleAddUser}
                className="md:grid md:grid-cols-2 gap-3 xl:gap-8 md:w-5/6 xl:w-4/6 mx-auto p-3 md:p-5 xl:p-10 rounded-md md:rounded-xl text-2xl bg-gray-300">
                <label>
                    First Name :
                    <input type="text" name="name1" placeholder="Type First Name" className="block w-full text-base mt-2 p-3 mb-5 md:mb-0" required />
                </label>
                <label>
                    Last Name :
                    <input type="text" name="name2" placeholder="Type Last Name" className="block w-full text-base mt-2 p-3 mb-5 md:mb-0" required />
                </label>
                <label>
                    Email :
                    <input type="email" name="email" placeholder="Type User Email" className="block w-full text-base mt-2 p-3 mb-5 md:mb-0" required />
                </label>
                <label>
                    Password :
                    <input type="password" name="password" placeholder="Type User Password" className="block w-full text-base mt-2 p-3 mb-5 md:mb-0" required />
                </label>
                <label>
                    Department :
                    <select
                        id="department" name="department" className="mt-1 block w-full px-3 py-4 bg-white shadow-sm text-base mb-5 md:mb-0" required>
                        <option value="IT">IT</option>
                        <option value="Digital-Marketing">Digital Marketing</option>
                        <option value="Front-End">Front-End</option>
                        <option value="Back-End">Back-End</option>
                        <option value="MERN">MERN</option>
                        <option value="Management">Management</option>
                        <option value="Admin">Admin</option>
                    </select>
                </label>
                <label>
                    Gender :
                    <select
                        id="gender" name="gender" className="mt-1 block w-full px-3 py-4 bg-white shadow-sm text-base mb-5 md:mb-0" required>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </label>
                <label>
                    Age :
                    <input type="date" name="age" className="block w-full text-base mt-2 p-3 mb-5 md:mb-0" required />
                </label>
                <label>
                    Salary :
                    <input type="number" name="salary" placeholder="Type User Salary" className="block w-full text-base mt-2 p-3 mb-5 md:mb-0" required />
                </label>
                <label className="col-span-2">
                    Img URL :
                    <input type="text" name="img" placeholder="Type User Photo URL" className="block w-full text-base mt-2 p-3 mb-5 md:mb-0" required />
                </label>
                {/* submit button */}
                <input type="submit" value="New User" className="col-span-2 mt-5 bg-white md:w-2/6 mx-auto p-2 px-5 btn hover:bg-purple-500" />
            </form>
        </div>
    )
}
export default AddUser