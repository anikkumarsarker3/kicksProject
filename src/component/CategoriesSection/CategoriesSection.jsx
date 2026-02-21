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

    const panelLabels = ["Lifestyle Shoes", "Basketball Shoes"];
    const categoryPairs = [];
    for (let i = 0; i < categories.length; i += 2) {
        categoryPairs.push(categories.slice(i, i + 2));
    }

    if (loading) {
        return <div className="text-center py-12 text-white">Loading...</div>;
    }

    return (
        <section className="w-full bg-[#1f1f1f] px-2 md:px-8 py-4 md:py-8">
            <div className="max-w-7xl mx-auto bg-[#1f1f1f] p-2 md:p-0">
                <div className="flex items-center justify-between mb-3 md:mb-6">
                    <h2 className="text-white text-[19px] md:text-[52px] font-extrabold leading-none md:uppercase tracking-tight">
                        Categories
                    </h2>

                    <div className="flex items-center gap-2 md:gap-3">
                        <button
                            type="button"
                            className="cat-prev w-6 h-6 md:w-8 md:h-8 rounded-md bg-[#8f8f8f] text-[#1f1f1f] flex items-center justify-center"
                            aria-label="Previous categories"
                        >
                            <ChevronLeft size={14} />
                        </button>
                        <button
                            type="button"
                            className="cat-next w-6 h-6 md:w-8 md:h-8 rounded-md bg-[#e7e7e7] text-[#1f1f1f] flex items-center justify-center"
                            aria-label="Next categories"
                        >
                            <ChevronRight size={14} />
                        </button>
                    </div>
                </div>

                <Swiper
                    modules={[Navigation]}
                    navigation={{
                        prevEl: ".cat-prev",
                        nextEl: ".cat-next",
                    }}
                    slidesPerView={1}
                    autoHeight
                    className="rounded-[14px] md:rounded-[34px] overflow-hidden"
                >
                    {categoryPairs.map((pair, pairIndex) => (
                        <SwiperSlide key={`cat-pair-${pairIndex}`} className="!h-auto">
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                {pair.map((cat, indexInPair) => {
                                    const absoluteIndex = pairIndex * 2 + indexInPair;
                                    return (
                                        <article
                                            key={cat.id}
                                            className={`relative h-[300px] md:h-[420px] overflow-hidden ${absoluteIndex % 2 === 0
                                                ? "bg-[#d6d7d9]"
                                                : "bg-[#e3e3e5]"
                                                }`}
                                        >
                                            <img
                                                src={cat.image}
                                                alt={cat.name}
                                                className="absolute inset-0 w-full h-full object-center object-cover"
                                            />

                                            <div className="absolute inset-0 bg-gradient-to-t from-white/50 via-transparent to-transparent" />

                                            <div className="absolute left-4 right-4 md:left-7 md:right-7 bottom-4 md:bottom-5 z-10 flex items-end justify-between gap-4">
                                                <h3 className="text-[24px] md:text-[40px] leading-[1.05] md:leading-[0.95] font-extrabold text-[#242424] md:uppercase">
                                                    {panelLabels[absoluteIndex] || cat.name}
                                                </h3>

                                                <button
                                                    type="button"
                                                    className="w-5 h-5 md:w-7 md:h-7 shrink-0 rounded-[4px] bg-[#1f1f1f] text-white flex items-center justify-center"
                                                    aria-label={`Open ${cat.name}`}
                                                >
                                                    <ArrowUpRight size={12} />
                                                </button>
                                            </div>
                                        </article>
                                    );
                                })}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default CategoriesSection;
