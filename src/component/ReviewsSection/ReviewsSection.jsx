import React from "react";
import { Star } from "lucide-react";

const reviews = [
    {
        id: 1,
        name: "Good Quality",
        text: "I highly recommend shopping from kicks",
        avatar: "/src/assets/user1.jpg",
        image: "/src/assets/review1.jpg",
    },
    {
        id: 2,
        name: "Good Quality",
        text: "I highly recommend shopping from kicks",
        avatar: "/src/assets/user2.jpg",
        image: "/src/assets/review2.jpg",
    },
    {
        id: 3,
        name: "Good Quality",
        text: "I highly recommend shopping from kicks",
        avatar: "/src/assets/user3.jpg",
        image: "/src/assets/review3.jpg",
    },
];

const ReviewsSection = () => {
    return (
        <section className="w-full bg-[#f3f3f3] px-4 md:px-8 py-14">
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

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {reviews.map((review) => (
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
                                    <p className="text-xs text-gray-500 mt-1 max-w-[200px]">
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
        </section>
    );
};

export default ReviewsSection;