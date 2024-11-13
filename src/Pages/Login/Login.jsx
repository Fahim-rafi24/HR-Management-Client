import { useContext, useState } from "react";
import { AuthInfo } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";



const Login = () => {
    const [error, setError]=useState('');
    const {loginAccount}=useContext(AuthInfo);
    const navigate = useNavigate();
    
    const handleLogin=(e)=>{
        setError('');
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        loginAccount(email, password)
        .then(res => {
            if (res) {
                navigate('/');
            }
        })
        .catch(error => {
            if(error){
                setError('Something May worng');
            }
        });
    }


    return (
        <div className="flex flex-col justify-center items-center">
            <section className="w-full bg-[#6bdc5f] min-h-[50vh]">
            </section>
            <section className=" w-full p-3">
            <form
            onSubmit={handleLogin}
            className="grid grid-cols-1 p-10 border w-full md:w-5/6 xl:w-2/5 shadow-2xl -mt-40 mx-auto bg-white">
                <h1 className="text-center font-bold text-3xl text-yellow-500">Login</h1>                
                <label>
                    Email : 
                    <input type="email" name="email" placeholder="Type Your Email" className="border block p-2 w-full my-5" required/>
                </label>
                <label>
                    Password : 
                    <input type="password" name="password" placeholder="Type Your Password" className="border block p-2 w-full my-5" required/>
                </label>
                <p className="text-red-500 my-3 italic">{error}</p>
                <input type="submit" value="Login" className="btn w-full md:w-3/6 mx-auto"/>
            </form>
            </section>
        </div>
    )
}
export default Login;