import React from "react";
import { motion } from "framer-motion";
import { Heart, Trash2 } from "lucide-react";

export default function ShoppingCartResponsive() {
    return (
        <div className="min-h-screen bg-gray-100 p-4 md:p-10">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="mb-6">
                    <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">
                        Saving to celebrate
                    </h1>
                    <p className="text-sm text-gray-500 mt-1">
                        Enjoy up to 60% off thousands of styles during the End of Year sale - while supplies last. No code needed.
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                        <span className="underline cursor-pointer">Join us</span> or {" "}
                        <span className="underline cursor-pointer">Sign-in</span>
                    </p>
                </div>

                {/* Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Bag Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="lg:col-span-2 bg-white rounded-2xl shadow-sm p-6"
                    >
                        <h2 className="text-lg font-semibold text-gray-800">Your Bag</h2>
                        <p className="text-sm text-gray-500 mb-6">
                            Items in your bag not reserved - check out now to make them yours.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6">
                            {/* Product Image */}
                            <div className="w-full sm:w-40 h-40 bg-gray-100 rounded-2xl flex items-center justify-center">
                                <img
                                    src="https://via.placeholder.com/150"
                                    alt="Product"
                                    className="object-contain h-32"
                                />
                            </div>

                            {/* Product Info */}
                            <div className="flex-1">
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                                    <div>
                                        <h3 className="font-semibold text-gray-800">
                                            DROPSET TRAINER SHOES
                                        </h3>
                                        <p className="text-sm text-gray-500 mt-1">
                                            Men's Road Running Shoes
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            Enamel Blue/ University White
                                        </p>
                                    </div>
                                    <p className="text-lg font-semibold text-blue-600">
                                        $130.00
                                    </p>
                                </div>

                                {/* Options */}
                                <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-700">
                                    <div className="flex items-center gap-1">
                                        <span className="font-medium">Size:</span>
                                        <select className="border rounded-lg px-2 py-1 text-sm focus:outline-none">
                                            <option>10</option>
                                            <option>9</option>
                                            <option>8</option>
                                        </select>
                                    </div>

                                    <div className="flex items-center gap-1">
                                        <span className="font-medium">Qty:</span>
                                        <select className="border rounded-lg px-2 py-1 text-sm focus:outline-none">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="flex items-center gap-4 mt-4 text-gray-500">
                                    <button className="hover:text-gray-700 transition">
                                        <Heart size={18} />
                                    </button>
                                    <button className="hover:text-red-500 transition">
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Order Summary */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white rounded-2xl shadow-sm p-6 h-fit"
                    >
                        <h2 className="text-lg font-semibold text-gray-800 mb-6">
                            Order Summary
                        </h2>

                        <div className="space-y-3 text-sm text-gray-700">
                            <div className="flex justify-between">
                                <span>1 ITEM</span>
                                <span>$130.00</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Delivery</span>
                                <span>$6.99</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Sales Tax</span>
                                <span>-</span>
                            </div>
                            <div className="border-t pt-3 flex justify-between font-semibold text-base">
                                <span>Total</span>
                                <span>$136.99</span>
                            </div>
                        </div>

                        <button className="w-full mt-6 bg-black text-white py-3 rounded-2xl text-sm font-medium hover:bg-gray-800 transition">
                            CHECKOUT
                        </button>

                        <p className="text-sm text-gray-600 mt-4 underline cursor-pointer">
                            Use a promo code
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
