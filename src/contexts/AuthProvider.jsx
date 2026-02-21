import React, { useEffect, useMemo, useState } from "react";
import { AuthContext } from "./AuthContext";

const CART_STORAGE_KEY = "kicks_cart_items";

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [cartItems, setCartItems] = useState(() => {
        const stored = localStorage.getItem(CART_STORAGE_KEY);
        if (!stored) {
            return [];
        }
        try {
            return JSON.parse(stored);
        } catch {
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (item) => {
        setCartItems((prev) => {
            const existingIndex = prev.findIndex(
                (cartItem) =>
                    cartItem.id === item.id &&
                    cartItem.selectedSize === item.selectedSize &&
                    cartItem.selectedColor === item.selectedColor
            );

            if (existingIndex !== -1) {
                return prev.map((cartItem, index) =>
                    index === existingIndex
                        ? {
                            ...cartItem,
                            quantity: cartItem.quantity + (item.quantity || 1),
                        }
                        : cartItem
                );
            }

            return [...prev, { ...item, quantity: item.quantity || 1 }];
        });
    };

    const removeFromCart = (cartKey) => {
        setCartItems((prev) => prev.filter((item) => item.cartKey !== cartKey));
    };

    const updateCartQuantity = (cartKey, quantity) => {
        setCartItems((prev) =>
            prev.map((item) =>
                item.cartKey === cartKey
                    ? { ...item, quantity: Math.max(1, Number(quantity) || 1) }
                    : item
            )
        );
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const authInfo = useMemo(
        () => ({
            user,
            setUser,
            cartItems,
            addToCart,
            removeFromCart,
            updateCartQuantity,
            clearCart,
        }),
        [user, cartItems]
    );

    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
