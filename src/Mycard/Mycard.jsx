
import { useContext, useEffect, useState } from 'react';

import { authContext } from '../share/Auth/AuthProvider';

import axios from 'axios';
import Swal from 'sweetalert2';


const Mycard = () => {
    const { user } = useContext(authContext)
    const [orders, setorders] = useState(null);
    
    // // const a=user.products[0];



    const handldelet = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won'to delate!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://y-peach-tau.vercel.app/order/${id}`)
                    .then(res => {
                        // console.log(res.data)
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });

                    })

            }
        });

        // console.log(id)

    }

    useEffect(() => {
        axios.get(`https://y-peach-tau.vercel.app/order?email=${user?.email}`)
            .then(res => {
                // console.log(res.data[1].product)
                setorders(res.data)
            })

    }, [user?.email])




    console.log(orders)
    return (
        <div>
           
            <h1>total products ={orders?.length}</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Name</th>
                            <th>Brand</th>
                            <th>price</th>
                            <th>Delate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders?.map((order, index) => <tr key={order._id}>
                            <th>
                                <p>{index + 1}</p>
                            </th>
                            <td>


                                <div>
                                    <div className="font-bold w-36">{order.product.name}</div>

                                </div>

                            </td>
                            <td>
                                <p>{order.product.brand}</p>
                            </td>
                            <td>{order.product.price} tk</td>
                            <th>
                                <button onClick={() => { handldelet(order._id) }} className="btn bg-red-400 btn-xs">Delate</button>
                            </th>
                        </tr>
                        )}





                    </tbody>



                </table>
            </div>


        </div>
    );
};

export default Mycard;