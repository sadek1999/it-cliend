
import { Link } from 'react-router-dom/dist';

const Brands = () => {
    return (
        <div className='bg-gray-300 flex md:gap-10 lg:gap-20 items-center'>
            <div>
            <Link to={"/hp"}>
            <img className='w-40 h-20 rounded-lg' src="https://brandlogos.net/wp-content/uploads/2020/11/hp-logo.png" alt="" />
            </Link>
            </div>
            <div>
            <Link to={'/dell'}>
            <img className='w-40 h-20 rounded-lg' src="https://i.ibb.co/YNGDfnm/Dell-logo.png" alt="" />
            </Link>
            </div>
            <div>
            <Link to={"/microsoft"}>
            <img className='w-40 h-36 rounded-lg' src="https://static.vecteezy.com/system/resources/thumbnails/019/017/455/small/microsoft-transparent-logo-free-png.png" alt="" />
            </Link>
            </div>
            <div>
            <Link to={'/lenovo'}>
            <img className='w-40 h-36rounded-lg' src="https://1000logos.net/wp-content/uploads/2017/03/Lenovo-Logo-1.png" alt="" />
            </Link>
            </div>
            <div>
            <Link to={'/samsung'}>
            <img className='w-40 h-36 ' src="https://static.vecteezy.com/system/resources/previews/019/017/544/non_2x/samsung-transparent-logo-free-png.png" alt="" />
            </Link>
            </div>
            <div>
            <Link to={'/asus'}>
            <img className='w-40 h-20' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/AsusTek-black-logo.png/640px-AsusTek-black-logo.png" alt="" />
            </Link>
            </div>
 
        </div>
    );
};

export default Brands;