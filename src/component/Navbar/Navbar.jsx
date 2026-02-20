import React, { useContext, useMemo, useState } from "react";
import { Link } from "react-router";
import {
    Menu,
    X,
    Search,
    User,
    ShoppingBag,
    ChevronRight,
} from "lucide-react";
import { AuthContext } from "../../contexts/AuthContext";

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const { cartItems = [] } = useContext(AuthContext);

    const cartCount = useMemo(
        () =>
            cartItems.reduce(
                (sum, item) => sum + Number(item.quantity || 1),
                0
            ),
        [cartItems]
    );

    return (
        <div className="w-full bg-[#f3f3f3] py-4 px-4 md:px-8 flex justify-center relative">
            <div className="relative w-full max-w-7xl bg-[#FAFAFA] rounded-2xl shadow-sm px-4 md:px-8 py-3 flex items-center justify-between">
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="p-2 rounded-xl hover:bg-gray-100 transition"
                    >
                        {mobileOpen ? (
                            <X className="w-6 h-6 text-black" strokeWidth={2} />
                        ) : (
                            <Menu className="w-6 h-6 text-black" strokeWidth={2} />
                        )}
                    </button>
                </div>

                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-black">
                    <button className="flex items-center gap-1 hover:opacity-70 transition">
                        <span>New Drops</span>
                        <span>🔥</span>
                    </button>
                    <button className="flex items-center gap-1 hover:opacity-70 transition">
                        Men <ChevronRight className="w-4 h-4" />
                    </button>
                    <button className="flex items-center gap-1 hover:opacity-70 transition">
                        Women <ChevronRight className="w-4 h-4" />
                    </button>
                </div>

                <div className="absolute left-1/2 -translate-x-1/2">
                    <img src="/src/assets/Logo.svg" alt="Logo" className="h-6 md:h-8" />
                </div>

                <div className="flex items-center gap-4 md:gap-6 ml-auto">
                    <button className="hidden md:flex p-2 rounded-xl hover:bg-gray-100 transition">
                        <Search className="w-5 h-5 text-black" strokeWidth={2} />
                    </button>

                    <button className="p-2 rounded-xl hover:bg-gray-100 transition">
                        <User className="w-5 h-5 text-black" strokeWidth={2} />
                    </button>

                    <Link
                        to="/cart"
                        className="relative p-2 rounded-xl hover:bg-gray-100 transition"
                    >
                        <ShoppingBag className="w-5 h-5 text-black" strokeWidth={2} />
                        <span className="absolute -top-2 -right-2 bg-yellow-400 text-xs font-bold text-black rounded-full min-w-6 h-6 px-1 flex items-center justify-center">
                            {cartCount}
                        </span>
                    </Link>
                </div>
            </div>

            {mobileOpen && (
                <div className="absolute top-full mt-3 w-[95%] max-w-7xl bg-white rounded-2xl shadow-lg p-6 md:hidden z-50">
                    <div className="flex flex-col gap-6 text-lg font-medium text-black">
                        <button className="flex items-center justify-between">
                            <span className="flex items-center gap-2">
                                New Drops <span>🔥</span>
                            </span>
                            <ChevronRight className="w-5 h-5" />
                        </button>

                        <button className="flex items-center justify-between">
                            <span>Men</span>
                            <ChevronRight className="w-5 h-5" />
                        </button>

                        <button className="flex items-center justify-between">
                            <span>Women</span>
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
