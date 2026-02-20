// components/ProductCarousel.jsx

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ProductCarousel() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://api.escuelajs.co/api/v1/products")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data.slice(0, 8)); // শুধু ৮টা product দেখাবো
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div className="text-center py-10">Loading...</div>;
    }

    return (
        <div className="bg-gray-100 py-10 px-4 md:px-10">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl md:text-3xl font-semibold">
                        You may also like
                    </h2>
                </div>

                <Swiper
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination={{ clickable: true }}
                    spaceBetween={20}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 4 },
                    }}
                >
                    {products.map((product) => (
                        <SwiperSlide key={product.id}>
                            <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition duration-300">

                                {/* Image */}
                                <div className="relative bg-gray-50 rounded-xl p-4">
                                    <img
                                        src={product.images?.[0]}
                                        alt={product.title}
                                        className="w-full h-40 object-contain"
                                    />
                                </div>

                                {/* Content */}
                                <div className="mt-4">
                                    <h3 className="text-sm font-semibold leading-tight min-h-[48px]">
                                        {product.title}
                                    </h3>

                                    <button className="mt-4 w-full bg-black text-white py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition">
                                        VIEW PRODUCT - ${product.price}
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}