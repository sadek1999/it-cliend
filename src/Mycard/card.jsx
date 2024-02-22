


const Card = ({card}) => {
    const{name,brand,type,img,about,price,rating ,_id}=card;
    const handlDelete=e=>{
        e.preventDefault();
    }
    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className="text-xl text-red-400 font-semibold" >{price} TK</p>
                <div className="card-actions justify-center">
                   
                    <button onClick={handlDelete} className="btn btn-primary">Show details</button>
                 
                    
                    
                    
                </div>
            </div>
        </div>
    );
};

export default Card;