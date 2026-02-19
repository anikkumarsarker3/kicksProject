import React from "react";

const HeroProduct = () => {
    return (
        <section className="w-full bg-[#f3f3f3] px-4 md:px-8 pb-16 pt-10 md:pt-15">
            <div className="max-w-7xl mx-auto relative rounded-3xl overflow-hidden">
                {/* Background Image */}
                <img
                    src="./src/assets/hero.svg"
                    alt="Nike Air Max"
                    className="w-full h-[420px] md:h-[600px] object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20" />

                {/* Left Vertical Label */}
                <div className="absolute left-0 top-30 -translate-y-1/2">
                    <div className="bg-black text-white text-xs tracking-wide px-3 py-8 rounded-l-2xl rotate-180 [writing-mode:vertical-rl]">
                        Nike product of the year
                    </div>
                </div>

                {/* Content */}
                <div className="absolute bottom-6 md:bottom-12 left-6 md:left-12 text-white max-w-md z-10">
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
                        NIKE AIR MAX
                    </h2>
                    <p className="mt-3 text-sm md:text-base text-white/90">
                        Nike introducing the new air max for everyone's comfort
                    </p>
                    <button className="mt-5 px-6 py-3 bg-[#4E63D9] rounded-lg text-sm font-semibold hover:opacity-90 transition">
                        SHOP NOW
                    </button>
                </div>

                {/* Thumbnails */}
                <div className="absolute right-4 md:right-8 bottom-6 md:bottom-12 flex flex-col gap-4 z-10">
                    <img
                        src="./src/assets/hero1.svg"
                        alt="thumb1"
                        className="w-16 h-16 md:w-24 md:h-24 object-cover rounded-2xl border border-white"
                    />
                    <img
                        src="./src/assets/hero2.svg"
                        alt="thumb2"
                        className="w-16 h-16 md:w-24 md:h-24 object-cover rounded-2xl border border-white"
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroProduct;