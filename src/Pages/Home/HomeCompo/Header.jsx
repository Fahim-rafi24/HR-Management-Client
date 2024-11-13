import { useContext } from "react";
import { VscThreeBars } from "react-icons/vsc";
import { AuthInfo } from "../../../context/AuthContext";



// htmlFor="my-drawer-2"

const Header = () => {
    const {logOut}=useContext(AuthInfo);

    const handleLogOut=(e)=>{
        logOut()
        .then(res => console.log(res));
    }
    return (
        <div
            className="flex justify-between items-center text-white font-bold p-2 md:px-10 h-20 bg-gradient-to-r from-[#5f72dc] to-[#57d1b1]">
            <div className="flex items-center space-x-2">
                <label htmlFor="my-drawer-2" className="lg:hidden">
                    <VscThreeBars className="text-2xl text-black"/>
                </label>
                <h1 className="md:text-2xl lavishly">H. R. Management System</h1>
            </div>
            <button onClick={handleLogOut} className="btn btn-outline">Log Out</button>
        </div>
    )
}
export default Header;