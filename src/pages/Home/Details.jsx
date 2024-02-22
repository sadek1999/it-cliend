
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLoaderData } from 'react-router-dom';

import { useContext } from 'react';
import { authContext } from '../../share/Auth/AuthProvider';
import axios from 'axios';

const Details = () => {
    const { user } = useContext(authContext)
    // const[user2,setuser2]=useState(user?user:null)
    //  console.log(user.products)
    //  console.log(user.email)

    const data = useLoaderData();

    const { name, brand, type, img, about, price, rating, _id } = data;
    // console.log(_id);
    const handladd = e => {
        e.preventDefault()

        console.log(data)
        console.log(user.email)
        const orderinfo = {
            email: user.email,
            product: data
        }

        axios.post('https://y-peach-tau.vercel.app/order',orderinfo)
        .then(res=>{
            console.log(res.data)
            toast.success(' Successfully Update', {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                        });
        })
        
    }

    return (
        <div>
           
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='space-y-2 p-3'>
                        <h1 className="text-3xl font-bold">{name}</h1>
                        <p className='text-xl font-semibold mt-2'>{brand}</p>
                        <p className='text-xl'>{type}</p>
                        <p className="py-6 text-xl">{about}</p>
                        <p className='text-2xl font-bold text-red-400'>{price} tk</p>
                        <button onClick={handladd} className="btn btn-primary">add to card</button>
                    </div>
                </div>
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


    );
};

export default Details;