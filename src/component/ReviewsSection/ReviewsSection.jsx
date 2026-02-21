import React from "react";
import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import rp1 from "../../assets/rP1.svg";
import rp2 from "../../assets/rP2.svg";
import rp3 from "../../assets/rP3.svg";
import review1 from "../../assets/review1.svg";
import review2 from "../../assets/review2.svg";
import review3 from "../../assets/review3.svg";

const reviews = [
    {
        id: 1,
        name: "Good Quality",
        text: "I highly recommend shopping from kicks",
        avatar: rp1,
        image: review1,
    },
    {
        id: 2,
        name: "Good Quality",
        text: "I highly recommend shopping from kicks",
        avatar: rp2,
        image: review2,
    },
    {
        id: 3,
        name: "Good Quality",
        text: "I highly recommend shopping from kicks",
        avatar: rp3,
        image: review3,
    },
];

const ReviewsSection = () => {
    const desktopReviews = reviews.slice(0, 3);

    return (
        <section className="w-full bg-[#d9d9d9] px-4 md:px-8 py-14">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-10">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-[#1f1f1f] uppercase">
                        Reviews
                    </h2>

                    <button className="px-5 py-2 bg-[#4E63D9] text-white text-xs md:text-sm font-semibold rounded-lg hover:opacity-90 transition">
                        SEE ALL
                    </button>
                </div>

                {/* Mobile Swiper */}
                <div className="md:hidden">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={16}
                    >
                        {reviews.map((review) => (
                            <SwiperSlide key={review.id}>
                                <div className="bg-white rounded-3xl overflow-hidden shadow-sm">
                                    <div className="p-5 flex items-start justify-between">
                                        <div>
                                            <h3 className="font-semibold text-[#1f1f1f]">
                                                {review.name}
                                            </h3>
                                            <p className="text-sm text-gray-500 mt-1 max-w-[200px]">
                                                {review.text}
                                            </p>

                                            <div className="flex items-center gap-1 mt-3 text-orange-400">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star key={i} size={14} fill="currentColor" />
                                                ))}
                                                <span className="text-xs text-[#1f1f1f] ml-2">5.0</span>
                                            </div>
                                        </div>

                                        <img
                                            src={review.avatar}
                                            alt="user"
                                            className="w-10 h-10 rounded-full object-cover"
                                        />
                                    </div>

                                    <img
                                        src={review.image}
                                        alt="review"
                                        className="w-full h-56 object-cover"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Desktop Grid */}
                <div className="hidden md:block">
                    <div className="md:grid md:grid-cols-3 gap-6 md:gap-8">
                    {desktopReviews.map((review) => (
                        <div
                            key={review.id}
                            className="bg-white rounded-3xl overflow-hidden shadow-sm"
                        >
                            {/* Top Info */}
                            <div className="p-5 flex items-start justify-between">
                                <div>
                                    <h3 className="font-semibold text-[#1f1f1f]">
                                        {review.name}
                                    </h3>
                                    <p className="text-sm text-gray-500 mt-1 max-w-[200px]">
                                        {review.text}
                                    </p>

                                    {/* Stars */}
                                    <div className="flex items-center gap-1 mt-3 text-orange-400">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} size={14} fill="currentColor" />
                                        ))}
                                        <span className="text-xs text-[#1f1f1f] ml-2">5.0</span>
                                    </div>
                                </div>

                                <img
                                    src={review.avatar}
                                    alt="user"
                                    className="w-10 h-10 rounded-full object-cover"
                                />
                            </div>

                            {/* Review Image */}
                            <img
                                src={review.image}
                                alt="review"
                                className="w-full h-56 md:h-64 object-cover"
                            />
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReviewsSection;
