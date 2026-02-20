import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const NewDrops = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch("https://api.escuelajs.co/api/v1/products");
                const data = await res.json();
                setProducts(data.slice(0, 4));
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return <div className="text-center py-12">Loading...</div>;
    }
    const handleProductDetails = (productId) => {
        // এখানে আপনি product details page এ navigate করতে পারেন
        // উদাহরণ: navigate(`/products/${product.id}`)
        // alert("Go to product details page");
        navigate(`/products/${productId}`);
        console.log("Product Details for ID:", productId);
    }
    return (
        <section className="w-full bg-[#d9d9d9] px-4 md:px-8 lg:px-10 py-10 md:py-12">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-8 mb-7 md:mb-8">
                    <h2 className="text-[42px] md:text-[56px] font-extrabold text-[#1f1f1f] leading-[0.95] tracking-tight uppercase">
                        DON&apos;T MISS OUT
                        <br />
                        NEW DROPS
                    </h2>

                    <button className="self-start md:self-auto px-7 py-3 bg-[#4f67dd] text-white text-xs md:text-sm font-bold rounded-md hover:opacity-90 transition whitespace-nowrap">
                        SHOP NEW DROPS
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-4">
                    {products.map((product) => (
                        <div key={product.id} className="group">
                            <div className="relative bg-[#d9d9d9] rounded-3xl border-[5px] border-[#ededed] min-h-[175px] md:min-h-[185px] flex items-center justify-center overflow-hidden">
                                <span className="absolute z-5 top-0 left-0 text-[10px] font-semibold px-3 py-1 rounded-br-xl bg-[#4f67dd] text-white">
                                    New
                                </span>

                                <div className="absolute w-full h-[160px] md:h-[175px] overflow-hidden rounded-xl">
                                    <img
                                        src={product.images?.[0] || ""}
                                        alt={product.title}
                                        className="w-full h-full object-cover object-center absolute"
                                    />
                                </div>
                            </div>

                            <h3 className="mt-3 text-[22px] font-extrabold text-[#232323] leading-[1.02] uppercase min-h-[64px] max-h-[64px] overflow-hidden">
                                {product.title}
                            </h3>

                            <button onClick={() => handleProductDetails(product.id)} className="mt-3 w-full bg-[#1f1f1f] text-white text-[11px] md:text-xs font-bold py-3 rounded-md hover:opacity-90 transition">
                                VIEW PRODUCT -
                                <span className="text-[#f5ac2f] ml-1">
                                    ${product.price}
                                </span>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NewDrops;
