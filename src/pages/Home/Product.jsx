import { Link } from "react-router-dom";


const Product = ({product}) => {
    const{name,brand,type,img,about,price,rating ,_id}=product;
    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className="text-xl text-red-400 font-semibold" >{price} TK</p>
                <div className="card-actions justify-center">
                    <Link to={`/product/${_id}`}>
                    <button className="btn btn-primary">Show details</button>
                    </Link>
                    
                    
                    
                </div>
            </div>
        </div>
    );
};

export default Product;