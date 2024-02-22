import { useEffect, useState } from "react";
import Brand from "./Brand";


const Sums = () => {
    const [products, setproducts] = useState([]);
    useEffect(() => {
        fetch(`https://y-peach-tau.vercel.app/products/Dell`)
            .then(res => res.json())
            .then(data => {
                setproducts(data);
            })

    }, []);
    return (
        <div>

        <div className="carousel w-full h-96">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://computermania-bd.b-cdn.net/wp-content/uploads/Home-page-coundown-banner.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://www.pchouse.com.bd/image/cache/catalog/banner/slider/offers/web-banner-960x450.png.webp" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://computermania-bd.b-cdn.net/wp-content/uploads/20.Lenovo-IdeaPad-Gaming-3-9k-discount.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>

        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {
                products.map(product => <Brand key={Brand._id}
                    product={product}></Brand>)
            }

        </div>

    </div>
    );
};

export default Sums;