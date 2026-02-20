// components/ProductCarousel.jsx

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const products = [
    {
        id: 1,
        name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
        price: 125,
        image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/sample1.jpg",
        isNew: true,
    },
    {
        id: 2,
        name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
        price: 125,
        image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/sample2.jpg",
        isNew: true,
    },
    {
        id: 3,
        name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
        price: 125,
        image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/sample3.jpg",
        isNew: true,
    },
    {
        id: 4,
        name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
        price: 125,
        image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/sample4.jpg",
        isNew: true,
    },
    {
        id: 5,
        name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
        price: 125,
        image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/sample5.jpg",
        isNew: true,
    },
    {
        id: 6,
        name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
        price: 125,
        image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/sample6.jpg",
        isNew: true,
    },
    {
        id: 7,
        name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
        price: 125,
        image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/sample7.jpg",
        isNew: true,
    },
    {
        id: 8,
        name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
        price: 125,
        image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/sample8.jpg",
        isNew: true,
    },
];

export default function ProductCarousel() {
    return (
        <div className="bg-gray-100 py-10 px-4 md:px-10">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl md:text-3xl font-semibold">
                        You may also like
                    </h2>
                </div>

                {/* Swiper */}
                <Swiper
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination={{ clickable: true }}
                    spaceBetween={20}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        640: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 4,
                        },
                    }}
                >
                    {products.map((product) => (
                        <SwiperSlide key={product.id}>
                            <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition duration-300">

                                {/* Image Box */}
                                <div className="relative bg-gray-50 rounded-xl p-4">
                                    {product.isNew && (
                                        <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                                            New
                                        </span>
                                    )}

                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-40 object-contain"
                                    />
                                </div>

                                {/* Content */}
                                <div className="mt-4">
                                    <h3 className="text-sm font-semibold leading-tight min-h-[48px]">
                                        {product.name}
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