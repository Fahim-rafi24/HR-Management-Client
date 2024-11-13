import { useContext } from "react"
import { UserInfo } from "../../../Context/UserContext"



const Profile = () => {
    const { accountInfo } = useContext(UserInfo);

    return (
        // universel class for all Nested Routes this w-class mean height in lg divice
        <div className="m-4 xl:m-10 lg:w-full space-y-20">
            {
                accountInfo && <div className="border md:w-4/6 xl:w-3/6 mx-auto bg-gray-300 p-5 md:p-10 mt-20">
                    <h1 className="text-3xl xl:text-5xl text-rose-400">Name : {accountInfo?.name}</h1>
                    <h3 className="text-xl font-bold text-[#5f72dc] my-2">Department : {accountInfo?.department}</h3>
                    <h3 className="text-xl font-bold text-purple-500 my-2">Email : {accountInfo?.email}</h3>
                    <p className="text-zinc-700 font-light">{accountInfo?.gender}</p>
                </div>
            }
        </div>
    )
}
export default Profile