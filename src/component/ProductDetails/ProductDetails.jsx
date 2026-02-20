import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const images = [
    "https://assets.adidas.com/images/w_600,f_auto,q_auto/sample1.jpg",
    "https://assets.adidas.com/images/w_600,f_auto,q_auto/sample2.jpg",
    "https://assets.adidas.com/images/w_600,f_auto,q_auto/sample3.jpg",
    "https://assets.adidas.com/images/w_600,f_auto,q_auto/sample4.jpg",
];

const sizes = [38, 39, 40, 41, 42, 43, 44, 45, 46, 47];

export default function ProductDetails() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [selectedSize, setSelectedSize] = useState(38);
    const [selectedColor, setSelectedColor] = useState("dark");

    return (
        <div className="bg-gray-100 min-h-screen py-10 px-4 md:px-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">

                {/* LEFT: IMAGE SECTION */}
                <div>
                    <Swiper
                        modules={[Navigation, Thumbs]}
                        navigation
                        thumbs={{ swiper: thumbsSwiper }}
                        className="rounded-xl overflow-hidden bg-white"
                    >
                        {images.map((img, i) => (
                            <SwiperSlide key={i}>
                                <img
                                    src={img}
                                    alt="product"
                                    className="w-full h-[400px] object-contain"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Thumbnails */}
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        slidesPerView={4}
                        spaceBetween={10}
                        className="mt-4"
                    >
                        {images.map((img, i) => (
                            <SwiperSlide key={i}>
                                <img
                                    src={img}
                                    alt="thumb"
                                    className="cursor-pointer bg-white rounded-lg p-2 h-24 object-contain border"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* RIGHT: PRODUCT INFO */}
                <div>
                    <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                        New Release
                    </span>

                    <h1 className="text-2xl md:text-3xl font-bold mt-4">
                        ADIDAS 4DFWD X PARLEY RUNNING SHOES
                    </h1>

                    <p className="text-blue-600 text-xl font-semibold mt-2">
                        $125.00
                    </p>

                    {/* Color */}
                    <div className="mt-6">
                        <h3 className="font-semibold text-sm mb-2">COLOR</h3>
                        <div className="flex gap-3">
                            <button
                                onClick={() => setSelectedColor("dark")}
                                className={`w-8 h-8 rounded-full border-2 ${selectedColor === "dark"
                                    ? "border-black"
                                    : "border-gray-300"
                                    } bg-gray-800`}
                            />
                            <button
                                onClick={() => setSelectedColor("green")}
                                className={`w-8 h-8 rounded-full border-2 ${selectedColor === "green"
                                    ? "border-black"
                                    : "border-gray-300"
                                    } bg-green-600`}
                            />
                        </div>
                    </div>

                    {/* Size */}
                    <div className="mt-6">
                        <div className="flex justify-between items-center">
                            <h3 className="font-semibold text-sm">SIZE</h3>
                            <span className="text-xs text-gray-500 cursor-pointer">
                                SIZE CHART
                            </span>
                        </div>

                        <div className="grid grid-cols-5 gap-2 mt-3">
                            {sizes.map((size) => (
                                <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className={`py-2 rounded-md border text-sm ${selectedSize === size
                                        ? "bg-black text-white border-black"
                                        : "bg-white border-gray-300"
                                        }`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="mt-8 space-y-3">
                        <button className="w-full bg-black text-white py-3 rounded-lg font-medium">
                            ADD TO CART
                        </button>

                        <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium">
                            BUY IT NOW
                        </button>
                    </div>

                    {/* About */}
                    <div className="mt-8">
                        <h3 className="font-semibold text-sm mb-2">
                            ABOUT THE PRODUCT
                        </h3>
                        <p className="text-sm text-gray-600">
                            Shadow Navy / Army Green
                        </p>

                        <ul className="text-sm text-gray-600 mt-3 list-disc pl-5 space-y-2">
                            <li>
                                This product is excluded from all promotional discounts
                                and offers.
                            </li>
                            <li>
                                Pay over time in interest-free installments with Affirm.
                            </li>
                            <li>
                                Join adiClub to get unlimited free standard shipping,
                                returns, & exchanges.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}