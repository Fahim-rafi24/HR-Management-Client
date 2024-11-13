import { FaPeopleRobbery } from "react-icons/fa6";
import { MdSell } from "react-icons/md";
import { FaMoneyBillWaveAlt } from "react-icons/fa";



const Dashboard = () => {
    return (
        // universel class for all Nested Routes this w-class mean height in lg divice
        <div className="m-4 xl:m-10 lg:w-full space-y-20">
            <div className="flex justify-between bg-[#6bdc5f] md:w-3/6 mx-auto p-4 xl:p-9 text-3xl font-bold"><FaPeopleRobbery className="text-5xl"/>Total Member: </div>
            <div className="flex justify-between bg-[#965fdc] md:w-3/6 mx-auto p-4 xl:p-9 text-3xl font-bold"><MdSell className="text-5xl"/>Total Sell: </div>
            <div className="flex justify-between bg-[#57d1b1] md:w-3/6 mx-auto p-4 xl:p-9 text-3xl font-bold"><FaMoneyBillWaveAlt className="text-5xl"/>Total Income: </div>
        </div>
    )
}
export default Dashboard