import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { BsGoogle } from "react-icons/bs";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { authContext } from "../../share/Auth/AuthProvider";


const Singin = () => {
    const {googlelogin, login } = useContext(authContext);
    const location=useLocation()
    const navigate=useNavigate()
    const [error, seterror] = useState('')

    const handlgoogle = e => {
        e.preventDefault()
       googlelogin()
            .then(result => {
                // console.log(result)
                navigate(location?.state?location?.state:'/')
            })
            .catch(error => {
                // console.log(error);
            })
    }

    const handlSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        login(email, password)
            .then(res => {
                // console.log(res)
                toast.success(' Successfully add ', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                navigate(location?.state?location?.state:'/')
            })
            .catch(error => {
                // console.error(error.message)
                seterror(error.message)
            })
            
    }


    return (

        <div>
            
            <div className="flex justify-center items-center  py-14">


                <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <form className="space-y-6" onSubmit={handlSubmit} action="#">
                        <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h5>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input type="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                            <input type="password" name="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                        </div>
                        <span className='text-red-500'>
                            {
                                error ? <p>{error}</p> : <p></p>
                            }
                        </span>
                        <div className="flex items-start">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                                </div>
                                <label
                                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                            </div>

                        </div>
                        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>

                        <button onClick={handlgoogle} className="mb-4 btn btn-success text-white w-full"><BsGoogle></BsGoogle> Google</button>

                        <div className="text-sm font-medium text-gray-500 dark:text-gray-300 c flex justify-between">
                            <p>Not registered?</p>
                            <Link to={'/singup'}>
                                <p className="text-blue-700 hover:underline dark:text-blue-500">Create account</p>
                            </Link>


                        </div>
                    </form>
                </div>


                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />

                <ToastContainer />
            </div>

        </div>

    );
};

export default Singin;