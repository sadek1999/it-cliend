import  { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
    const [products,setproducts]=useState([]);
    useEffect(()=>{
        fetch(`https://automotive-server-amber.vercel.app/products`)
        .then(res=>res.json())
        .then(data=>{
            setproducts(data);
        })
        
    },[]);
    // console.log(products)
    //
    return (
        <div>
            <h1>total data ={products.length}</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {
                   products.map(product=><Product key={product._id}
                     product={product}></Product>) 
                }
            </div>
        </div>
    );
};

export default Products;