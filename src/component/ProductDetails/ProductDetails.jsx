import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { Heart } from "lucide-react";

const sizes = [38, 39, 40, 41, 42, 43, 44, 45, 46, 47];
const unavailableSizes = [];

export default function ProductDetails() {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [selectedSize, setSelectedSize] = useState(38);
    const [selectedColor, setSelectedColor] = useState("navy");
    console.log("Product ID from URL:", productId);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                setLoading(true);
                setError("");
                const res = await axios.get(
                    `https://api.escuelajs.co/api/v1/products/${productId}`
                );
                setProduct(res.data);
            } catch (err) {
                console.error("Error fetching product:", err);
                setError("Failed to load product details.");
            } finally {
                setLoading(false);
            }
        };

        if (productId) {
            fetchProduct();
        }
    }, [productId]);

    if (loading) {
        return <div className="text-center py-12">Loading...</div>;
    }

    if (error) {
        return <div className="text-center py-12 text-red-600">{error}</div>;
    }

    if (!product) {
        return <div className="text-center py-12">Product not found.</div>;
    }

    const productImages = Array.isArray(product.images) ? product.images : [];
    const handleAddToCart = () => {
        // এখানে আপনি প্রোডাক্টটি কার্টে যোগ করার লজিক লিখতে পারেন
        alert(`Added ${product.title} (Size: ${selectedSize}, Color: ${selectedColor}) to cart!`);
    }
    return (
        <section className="w-full bg-[#d9d9d9] px-4 md:px-8 py-3 md:py-4">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.7fr_0.95fr] gap-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                    {productImages.length > 0 ? (
                        productImages.map((img, index) => (
                            <div
                                key={`${img}-${index}`}
                                className="bg-[#d4d5d8] h-[280px] md:h-[340px] overflow-hidden"
                            >
                                <img
                                    src={img}
                                    alt={`${product.title} ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))
                    ) : (
                        <div className="sm:col-span-2 bg-[#d4d5d8] h-[280px] md:h-[340px] flex items-center justify-center text-[#666] text-sm">
                            No image available
                        </div>
                    )}
                </div>

                <aside className="bg-[#d9d9d9] py-1">
                    <span className="inline-block bg-[#4f67dd] text-white text-[10px] px-3 py-1 rounded-full font-semibold">
                        New Release
                    </span>

                    <h1 className="mt-2 text-[40px] md:text-[42px] leading-[0.95] font-extrabold uppercase text-[#242424]">
                        {product.title}
                    </h1>

                    <p className="mt-2 text-[36px] md:text-[38px] font-bold text-[#3f5fdf]">
                        ${Number(product.price).toFixed(2)}
                    </p>

                    <div className="mt-4">
                        <p className="text-[11px] font-bold uppercase text-[#262626] mb-2">
                            COLOR
                        </p>
                        <div className="flex items-center gap-2">
                            <button
                                type="button"
                                onClick={() => setSelectedColor("navy")}
                                className={`w-7 h-7 rounded-full border-2 ${selectedColor === "navy"
                                    ? "border-[#1f2f47]"
                                    : "border-transparent"
                                    } bg-[#2f3e55]`}
                                aria-label="Navy"
                            />
                            <button
                                type="button"
                                onClick={() => setSelectedColor("green")}
                                className={`w-7 h-7 rounded-full border-2 ${selectedColor === "green"
                                    ? "border-[#1f2f47]"
                                    : "border-transparent"
                                    } bg-[#788a76]`}
                                aria-label="Green"
                            />
                        </div>
                    </div>

                    <div className="mt-6">
                        <div className="flex items-center justify-between">
                            <p className="text-[11px] font-bold uppercase text-[#262626]">
                                SIZE
                            </p>
                            <button
                                type="button"
                                className="text-[10px] font-bold uppercase text-[#444]"
                            >
                                SIZE CHART
                            </button>
                        </div>

                        <div className="grid grid-cols-5 gap-1.5 mt-2">
                            {sizes.map((size) => {
                                const unavailable = unavailableSizes.includes(size);
                                return (
                                    <button
                                        key={size}
                                        type="button"
                                        disabled={unavailable}
                                        onClick={() => setSelectedSize(size)}
                                        className={`h-8 rounded-md text-[11px] font-bold border transition ${unavailable
                                            ? "bg-[#d0d0d0] text-[#8f8f8f] border-[#d0d0d0] cursor-not-allowed"
                                            : selectedSize === size
                                                ? "bg-[#1f1f1f] text-white border-[#1f1f1f]"
                                                : "bg-[#efefef] text-[#2d2d2d] border-[#efefef]"
                                            }`}
                                    >
                                        {size}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    <div className="mt-4 space-y-2">
                        <div className="flex items-center gap-2">
                            <button
                                onClick={handleAddToCart}
                                type="button"
                                className="flex-1 h-10 bg-[#1f1f1f] text-white text-[11px] font-bold uppercase rounded-md"
                            >
                                Add To Cart
                            </button>
                            <button
                                type="button"
                                className="w-10 h-10 rounded-md bg-[#1f1f1f] text-white flex items-center justify-center"
                                aria-label="Add to wishlist"
                            >
                                <Heart size={16} />
                            </button>
                        </div>

                        <button
                            type="button"
                            className="w-full h-10 bg-[#4f67dd] text-white text-[11px] font-bold uppercase rounded-md"
                        >
                            Buy It Now
                        </button>
                    </div>

                    <div className="mt-5">
                        <h3 className="text-[12px] font-extrabold uppercase text-[#252525]">
                            About The Product
                        </h3>
                        <p className="mt-1 text-[12px] text-[#5a5a5a]">
                            {product.category?.name || "General"} / {product.slug}
                        </p>
                        <p className="mt-2 text-[12px] text-[#5a5a5a] leading-snug">
                            {product.description}
                        </p>
                    </div>
                </aside>
            </div>
        </section>
    );
}
