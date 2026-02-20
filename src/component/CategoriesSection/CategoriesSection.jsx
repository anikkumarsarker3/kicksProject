import React, { useEffect, useState } from "react";
import axios from "axios";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

const CategoriesSection = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await axios.get(
                    "https://api.escuelajs.co/api/v1/categories"
                );

                const filtered = res.data.filter(
                    (cat) => cat.image && cat.image.startsWith("http")
                );

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

    const panelLabels = ["LIFESTYLE SHOES", "BASKETBALL SHOES"];

    return (
        <section className="w-full bg-[#1f1f1f] px-4 md:px-8 py-10 md:py-12">
            <div className="max-w-7xl mx-auto bg-[#1f1f1f] p-3 md:p-4">
                <div className="flex items-center justify-between mb-6 md:mb-8">
                    <h2 className="text-white text-4xl md:text-5xl font-extrabold tracking-tight uppercase">
                        Categories
                    </h2>

                    <div className="flex items-center gap-3">
                        <button
                            type="button"
                            className="cat-prev w-8 h-8 rounded-md bg-[#a8a8a8] text-[#1f1f1f] flex items-center justify-center"
                            aria-label="Previous categories"
                        >
                            <ChevronLeft size={16} />
                        </button>
                        <button
                            type="button"
                            className="cat-next w-8 h-8 rounded-md bg-[#e7e7e7] text-[#1f1f1f] flex items-center justify-center"
                            aria-label="Next categories"
                        >
                            <ChevronRight size={16} />
                        </button>
                    </div>
                </div>

                <Swiper
                    modules={[Navigation]}
                    navigation={{
                        prevEl: ".cat-prev",
                        nextEl: ".cat-next",
                    }}
                    spaceBetween={0}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                    }}
                    className="rounded-[30px] overflow-hidden"
                >
                    {categories.map((cat, index) => (
                        <SwiperSlide key={cat.id}>
                            <article
                                className={`relative h-[340px] md:h-[420px] overflow-hidden ${index % 2 === 0
                                    ? "bg-[#d6d7d9]"
                                    : "bg-[#e3e3e5]"
                                    }`}
                            >
                                <img
                                    src={cat.image}
                                    alt={cat.name}
                                    className="absolute inset-0 w-full h-full object-cover object-center"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-transparent" />

                                <div className="absolute left-7 right-7 md:left-9 md:right-9 bottom-6 md:bottom-7 z-10 flex items-end justify-between gap-4">
                                    <h3 className="text-[22px] md:text-[38px] leading-[0.95] font-extrabold uppercase text-[#242424]">
                                        {panelLabels[index] || cat.name}
                                    </h3>

                                    <button
                                        type="button"
                                        className="w-9 h-9 md:w-10 md:h-10 shrink-0 rounded-md bg-[#1f1f1f] text-white flex items-center justify-center"
                                        aria-label={`Open ${cat.name}`}
                                    >
                                        <ArrowUpRight size={18} />
                                    </button>
                                </div>
                            </article>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default CategoriesSection;
