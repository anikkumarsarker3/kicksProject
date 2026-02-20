import { useContext, useMemo } from "react";
import { Heart, Trash2 } from "lucide-react";
import ProductCarousel from "../../component/ProductCarousel/ProductCarousel";
import { AuthContext } from "../../contexts/AuthContext";
import Swal from "sweetalert2";

const DELIVERY_FEE = 6.99;

const CartPage = () => {
    const { cartItems, removeFromCart, updateCartQuantity, clearCart } =
        useContext(AuthContext);

    const { subTotal, totalItems, total } = useMemo(() => {
        const subTotalAmount = cartItems.reduce(
            (sum, item) => sum + Number(item.price || 0) * Number(item.quantity || 1),
            0
        );
        const totalItemCount = cartItems.reduce(
            (sum, item) => sum + Number(item.quantity || 1),
            0
        );
        const grandTotal =
            cartItems.length > 0 ? subTotalAmount + DELIVERY_FEE : subTotalAmount;

        return {
            subTotal: subTotalAmount,
            totalItems: totalItemCount,
            total: grandTotal,
        };
    }, [cartItems]);

    const handleCheckout = async () => {
        if (cartItems.length === 0) {
            Swal.fire({
                icon: "warning",
                title: "Cart is Empty",
                text: "Add products before checkout.",
                confirmButtonColor: "#4f67dd",
            });
            return;
        }

        const result = await Swal.fire({
            icon: "question",
            title: "Confirm Checkout",
            html: `
                <div style="text-align:left">
                    <p style="margin:0;">Items: <strong>${totalItems}</strong></p>
                    <p style="margin:0;">Subtotal: <strong>$${subTotal.toFixed(
                        2
                    )}</strong></p>
                    <p style="margin:0;">Delivery: <strong>$${DELIVERY_FEE.toFixed(
                        2
                    )}</strong></p>
                    <p style="margin:8px 0 0 0;">Total Payable: <strong>$${total.toFixed(
                        2
                    )}</strong></p>
                </div>
            `,
            showCancelButton: true,
            confirmButtonText: "Place Order",
            cancelButtonText: "Cancel",
            confirmButtonColor: "#4f67dd",
        });

        if (result.isConfirmed) {
            clearCart();
            Swal.fire({
                icon: "success",
                title: "Order Placed",
                text: "Checkout complete. Your cart has been cleared.",
                confirmButtonColor: "#4f67dd",
            });
        }
    };

    return (
        <div>
            <div className="min-h-screen bg-gray-100 p-4 md:p-10">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-6">
                        <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">
                            Saving to celebrate
                        </h1>
                        <p className="text-sm text-gray-500 mt-1">
                            Enjoy up to 60% off thousands of styles during the End of Year
                            sale - while supplies last. No code needed.
                        </p>
                        <p className="text-sm text-gray-600 mt-1">
                            <span className="underline cursor-pointer">Join us</span> or{" "}
                            <span className="underline cursor-pointer">Sign-in</span>
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm p-6">
                            <h2 className="text-lg font-semibold text-gray-800">Your Bag</h2>
                            <p className="text-sm text-gray-500 mb-6">
                                Items in your bag not reserved - check out now to make them
                                yours.
                            </p>

                            {cartItems.length === 0 ? (
                                <div className="text-sm text-gray-500 py-8">
                                    Your cart is empty.
                                </div>
                            ) : (
                                <div className="space-y-6">
                                    {cartItems.map((item) => (
                                        <div
                                            key={item.cartKey}
                                            className="flex flex-col sm:flex-row gap-6 border-b border-gray-100 pb-6 last:border-b-0 last:pb-0"
                                        >
                                            <div className="w-full sm:w-40 h-40 bg-gray-100 rounded-2xl flex items-center justify-center overflow-hidden">
                                                <img
                                                    src={item.image || item.images?.[0] || ""}
                                                    alt={item.title}
                                                    className="object-contain h-32 w-full"
                                                />
                                            </div>

                                            <div className="flex-1">
                                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                                                    <div>
                                                        <h3 className="font-semibold text-gray-800 uppercase">
                                                            {item.title}
                                                        </h3>
                                                        <p className="text-sm text-gray-500 mt-1">
                                                            {item.category?.name || "General"}
                                                        </p>
                                                        <p className="text-sm text-gray-500">
                                                            Color: {item.selectedColor}
                                                        </p>
                                                    </div>
                                                    <p className="text-lg font-semibold text-blue-600">
                                                        $
                                                        {(
                                                            Number(item.price || 0) *
                                                            Number(item.quantity || 1)
                                                        ).toFixed(2)}
                                                    </p>
                                                </div>

                                                <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-700">
                                                    <div className="flex items-center gap-1">
                                                        <span className="font-medium">Size:</span>
                                                        <span className="border rounded-lg px-2 py-1 text-sm bg-gray-50">
                                                            {item.selectedSize}
                                                        </span>
                                                    </div>

                                                    <div className="flex items-center gap-1">
                                                        <span className="font-medium">Qty:</span>
                                                        <select
                                                            value={item.quantity}
                                                            onChange={(e) =>
                                                                updateCartQuantity(
                                                                    item.cartKey,
                                                                    Number(e.target.value)
                                                                )
                                                            }
                                                            className="border rounded-lg px-2 py-1 text-sm focus:outline-none"
                                                        >
                                                            {[1, 2, 3, 4, 5].map((qty) => (
                                                                <option key={qty} value={qty}>
                                                                    {qty}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                </div>

                                                <div className="flex items-center gap-4 mt-4 text-gray-500">
                                                    <button className="hover:text-gray-700 transition">
                                                        <Heart size={18} />
                                                    </button>
                                                    <button
                                                        onClick={() => removeFromCart(item.cartKey)}
                                                        className="hover:text-red-500 transition"
                                                    >
                                                        <Trash2 size={18} />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="bg-white rounded-2xl shadow-sm p-6 h-fit">
                            <h2 className="text-lg font-semibold text-gray-800 mb-6">
                                Order Summary
                            </h2>

                            <div className="space-y-3 text-sm text-gray-700">
                                <div className="flex justify-between">
                                    <span>{totalItems} ITEM</span>
                                    <span>${subTotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Delivery</span>
                                    <span>
                                        {cartItems.length > 0
                                            ? `$${DELIVERY_FEE.toFixed(2)}`
                                            : "$0.00"}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Sales Tax</span>
                                    <span>-</span>
                                </div>
                                <div className="border-t pt-3 flex justify-between font-semibold text-base">
                                    <span>Total</span>
                                    <span>${total.toFixed(2)}</span>
                                </div>
                            </div>

                            <button
                                onClick={handleCheckout}
                                className="w-full mt-6 bg-black text-white py-3 rounded-2xl text-sm font-medium hover:bg-gray-800 transition"
                            >
                                CHECKOUT
                            </button>

                            <p className="text-sm text-gray-600 mt-4 underline cursor-pointer">
                                Use a promo code
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <ProductCarousel />
        </div>
    );
};

export default CartPage;
