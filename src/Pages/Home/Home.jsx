import { Outlet } from "react-router-dom";
import Header from "./HomeCompo/Header";
import SideBar from "./HomeCompo/Sidebar";



const Home = () => {
    return (
        <>
            <Header></Header>
            <section className="lg:flex">
                <div>
                <SideBar></SideBar>
                </div>
                <Outlet/>
            </section>
        </>
    )
}
export default Home;