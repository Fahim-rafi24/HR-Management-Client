import { NavLink } from "react-router-dom";
// icon
import { IoSpeedometer } from "react-icons/io5";
import { RiLoginBoxFill } from "react-icons/ri";
import { FaPeopleGroup } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";


const SideBar = () => {
    return (
        <div className="drawer z-10 lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
            </div>
            <div className="drawer-side mt-20 lg:mt-0">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 space-y-3 text-xl font-bold">
                    {/* Sidebar content here */}
                    <li><NavLink to={'/'}> <IoSpeedometer /> Dashboard</NavLink></li>
                    <li><NavLink to={'/member'}> <FaPeopleGroup /> Membres</NavLink></li>
                    <li><NavLink to={'/profile'}> <CgProfile /> Profile</NavLink></li>
                    <li className="lavishly"><NavLink to={'/login'}> <RiLoginBoxFill /> Login</NavLink></li>
                    {/* Sidebar content End */}
                </ul>
            </div>
        </div>
    )
}
export default SideBar;