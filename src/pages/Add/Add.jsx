
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Add = () => {

    const handlAdd = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const img = form.img.value;
        const about = form.about.value;
        const price = form.price.value;
        const rating = form.rating.value;

        const product = { name, brand, type, img, about, price, rating };
        console.log(product)

        fetch('https://y-peach-tau.vercel.app/products', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
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
            })
        // console.log(name,brand,type,img,about,price,rating)
    }
    return (
        <div>
           
            <div className='bg-white p-10'>
                <div className="bg-[#F4F3F0] p-8">
                    <form className='space-y-5' onSubmit={handlAdd} action="">
                        <h1 className='text-4xl font-semibold text-center my-5'>Add products</h1>
                        {/* row -1 */}
                        <div className='flex gap-4 lg:flex-row '>
                            <div className='w-full space-y-1'>
                                <h3 className='font-semibold'>Name</h3>
                                <input className='pl-2 py-0.5 w-full' type="text" placeholder='Product Name' required name="name" id="" />
                            </div>
                            <div className='w-full space-y-1'>
                                <h3 className='font-semibold'>Brand</h3>
                                <input className='pl-2 py-0.5 w-full' type="text" placeholder='Brand name' name="brand" required id="" />
                            </div>
                        </div>
                        {/* row -2 */}
                        <div className='flex gap-4 lg:flex-row '>
                            <div className='w-full space-y-1'>
                                <h3 className='font-semibold'>Type</h3>
                                <input className='pl-2 py-0.5 w-full' type="text" placeholder='Product Type' required name="type" id="" />
                            </div>
                            <div className='w-full space-y-1'>
                                <h3 className='font-semibold'>Price</h3>
                                <input className='pl-2 py-0.5 w-full' type="text" placeholder='Price' name="price" required id="" />
                            </div>
                        </div>
                        {/* row -3 */}
                        <div className='flex gap-4 lg:flex-row '>
                            <div className='w-full space-y-1'>
                                <h3 className='font-semibold'>Rating</h3>
                                <input className='pl-2 py-0.5 w-full' type="text" placeholder='Rating' required name="rating" id="" />
                            </div>
                            <div className='w-full space-y-1'>
                                <h3 className='font-semibold'>Photo</h3>
                                <input className='pl-2 py-0.5 w-full' type="text" placeholder='img url' name="img" required id="" />
                            </div>
                        </div>

                        <div className='w-full'>
                            <h3 className='font-semibold space-y-1'>Short description</h3>
                            <input className=' p-3 w-full' type="text" placeholder='about product' name="about" required id="" />
                        </div>

                        <div className=' w-full flex justify-center '>
                            <input type="submit" className='bg-blue-600 w-80 px-4 py-2 text-xl font-semibold text-white rounded-lg ' value="Add" />
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

export default Add;