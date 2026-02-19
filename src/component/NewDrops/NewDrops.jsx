import React from "react";

const products = [
    {
        id: 1,
        badge: "New",
        image: "/src/assets/shoe1.png",
        title: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
        price: "$125",
    },
    {
        id: 2,
        badge: "10% off",
        image: "/src/assets/shoe2.png",
        title: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
        price: "$125",
    },
    {
        id: 3,
        badge: "New",
        image: "/src/assets/shoe3.png",
        title: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
        price: "$125",
    },
    {
        id: 4,
        badge: "New",
        image: "/src/assets/shoe4.png",
        title: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
        price: "$125",
    },
];

const NewDrops = () => {
    return (
        <section className="w-full bg-[#f3f3f3] px-4 md:px-8 py-12">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-[#1f1f1f] leading-tight">
                        DON’T MISS OUT <br className="hidden md:block" /> NEW DROPS
                    </h2>

                    <button className="self-start md:self-auto px-6 py-3 bg-[#4E63D9] text-white text-sm font-semibold rounded-lg hover:opacity-90 transition">
                        SHOP NEW DROPS
                    </button>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                    {products.map((product) => (
                        <div key={product.id} className="group">
                            {/* Image Card */}
                            <div className="relative bg-white rounded-2xl p-4 md:p-6 shadow-sm">
                                {/* Badge */}
                                <span
                                    className={`absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-full ${product.badge === "10% off"
                                            ? "bg-orange-400 text-black"
                                            : "bg-[#4E63D9] text-white"
                                        }`}
                                >
                                    {product.badge}
                                </span>

                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-28 md:h-40 object-contain"
                                />
                            </div>

                            {/* Title */}
                            <h3 className="mt-4 text-sm md:text-base font-bold text-[#1f1f1f] leading-snug">
                                {product.title}
                            </h3>

                            {/* Button */}
                            <button className="mt-3 w-full bg-black text-white text-xs md:text-sm font-semibold py-3 rounded-lg hover:opacity-90 transition">
                                VIEW PRODUCT - <span className="text-orange-400">{product.price}</span>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NewDrops;