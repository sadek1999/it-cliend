
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='flex items-center justify-center'>
          
            <div className='space-y-5'>
              <img src="https://i.ibb.co/5sN9SRD/Screenshot-2023-10-09-160311.png" alt="" />

              < h1 className='text-center text-3xl font-bold'> 404 - Page is not found</h1>
              <div className='flex justify-center mt-5'>
                <Link to={'/'}>

                <button className=' py-3 px-10 rounded-full text-xl bg-blue-600  text-white font-bold
                '>Go to Home</button>

                </Link>
             
              </div>
                
            </div>
            
            
        </div>
    );
};

export default Error;