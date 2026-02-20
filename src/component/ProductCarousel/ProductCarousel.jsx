import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useNavigate } from "react-router";

export default function ProductCarousel() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("https://api.escuelajs.co/api/v1/products")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div className="text-center py-10">Loading...</div>;
    }
    const handleProductDetails = (productId) => {
        navigate(`/products/${productId}`);
        console.log("Product Details for ID:", productId);
    };

    return (
        <section className="w-full bg-[#d9d9d9] px-4 md:px-8 py-9 md:py-10">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between mb-5">
                    <h2 className="text-[30px] md:text-[44px] leading-none font-extrabold text-[#252525]">
                        You may also like
                    </h2>

                    <div className="flex items-center gap-2">
                        <button
                            type="button"
                            className="carousel-prev w-8 h-8 rounded-md bg-[#8a8a8a] text-white flex items-center justify-center"
                            aria-label="Previous products"
                        >
                            <ChevronLeft size={16} />
                        </button>
                        <button
                            type="button"
                            className="carousel-next w-8 h-8 rounded-md bg-[#1f1f1f] text-white flex items-center justify-center"
                            aria-label="Next products"
                        >
                            <ChevronRight size={16} />
                        </button>
                    </div>
                </div>

                <Swiper
                    modules={[Navigation, Pagination]}
                    navigation={{
                        prevEl: ".carousel-prev",
                        nextEl: ".carousel-next",
                    }}
                    pagination={{
                        clickable: true,
                        el: ".carousel-pagination",
                        bulletClass: "carousel-bullet",
                        bulletActiveClass: "carousel-bullet-active",
                    }}
                    spaceBetween={10}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 4 },
                    }}
                >
                    {products.map((product) => (
                        <SwiperSlide key={product.id}>
                            <article className="pb-1">
                                <div className="relative bg-[#d4d6da] rounded-3xl border-[5px] border-[#ececec] px-3 pt-8 pb-3 h-[180px] md:h-[200px] flex items-center justify-center overflow-hidden">
                                    <span className="absolute z-1 top-0 left-0 text-[9px] font-semibold px-3 py-1 rounded-br-xl bg-[#4f67dd] text-white">
                                        New
                                    </span>
                                    <img
                                        src={product.images?.[0] || ""}
                                        alt={product.title}
                                        className="absolute w-[100%] h-[500px] object-contain object-center"
                                    />
                                </div>

                                <h3 className="mt-2 text-[18px] md:text-[20px] font-extrabold uppercase leading-[1.02] text-[#242424] min-h-[58px] max-h-[58px] overflow-hidden">
                                    {product.title}
                                </h3>

                                <button
                                    onClick={() => handleProductDetails(product.id)}
                                    type="button"
                                    className="mt-2 w-full bg-[#1f1f1f] text-white text-[10px] md:text-[11px] font-bold py-3 rounded-md"
                                >
                                    VIEW PRODUCT -
                                    <span className="text-[#f5ac2f] ml-1">
                                        ${product.price}
                                    </span>
                                </button>
                            </article>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="carousel-pagination mt-4 flex items-center justify-center gap-2" />
            </div>

            <style>{`
                .carousel-pagination .carousel-bullet {
                    width: 24px;
                    height: 4px;
                    border-radius: 9999px;
                    background: #b8b8b8;
                    opacity: 1;
                    margin: 0 !important;
                    display: inline-block;
                }
                .carousel-pagination .carousel-bullet-active {
                    background: #4f67dd;
                }
            `}</style>
        </section>
    );
}
