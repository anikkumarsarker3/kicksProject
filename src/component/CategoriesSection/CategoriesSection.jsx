import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

const CategoriesSection = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await axios.get(
                    "https://api.escuelajs.co/api/v1/categories"
                );

                // শুধু valid image আছে এমন 4টা category নেবো
                const filtered = res.data
                    .filter((cat) => cat.image && cat.image.startsWith("http"))
                    .slice(0, 4);

                setCategories(filtered);
            } catch (error) {
                console.error("Error fetching categories:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchCategories();
    }, []);

    if (loading) {
        return <div className="text-center py-12 text-white">Loading...</div>;
    }

    return (
        <section className="w-full bg-[#1f1f1f] px-4 md:px-8 py-12">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl md:text-4xl font-extrabold text-white uppercase">
                        Categories
                    </h2>

                    <div className="hidden md:flex items-center gap-3">
                        <button className="cat-prev w-9 h-9 flex items-center justify-center bg-white/10 text-white rounded-md">
                            <ChevronLeft size={18} />
                        </button>
                        <button className="cat-next w-9 h-9 flex items-center justify-center bg-white/10 text-white rounded-md">
                            <ChevronRight size={18} />
                        </button>
                    </div>
                </div>

                {/* Swiper */}
                <Swiper
                    modules={[Navigation]}
                    navigation={{
                        prevEl: ".cat-prev",
                        nextEl: ".cat-next",
                    }}
                    spaceBetween={20}
                    breakpoints={{
                        0: { slidesPerView: 1.2 },
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 2 },
                    }}
                >
                    {categories.map((cat) => (
                        <SwiperSlide key={cat.id}>
                            <div className="bg-[#e9e9e9] rounded-3xl p-6 relative h-[320px] md:h-[380px] flex flex-col justify-between overflow-hidden">

                                <img
                                    src={cat.image}
                                    alt={cat.name}
                                    className="absolute right-0 top-10 w-3/4 object-contain"
                                />

                                <div className="relative z-10">
                                    <h3 className="text-lg md:text-xl font-bold text-[#1f1f1f] uppercase leading-snug">
                                        {cat.name}
                                    </h3>
                                </div>

                                <div className="relative z-10">
                                    <button className="w-9 h-9 flex items-center justify-center bg-black text-white rounded-md">
                                        <ArrowUpRight size={18} />
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default CategoriesSection;