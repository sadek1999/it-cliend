
import { Link } from 'react-router-dom/dist';

const Brand = ({product}) => {
    const{name,brand,type,img,about,price,rating ,_id}=product;
    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
        <figure><img src={img} alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <h3>{brand}</h3>
            <p>{type}</p>
            <p>{rating}</p>
            <p className="text-xl text-red-400 font-semibold" >{price} TK</p>

            <div className="card-actions justify-center">
                <Link to={`/product/${_id}`}>
                <button className="btn btn-primary">Show details</button>
                </Link>
                <Link to={`/update/${_id}`}>
                <button className="btn btn-primary">Update</button>
                </Link>
                
                
            </div>
        </div>
    </div>
    );
};

export default Brand;