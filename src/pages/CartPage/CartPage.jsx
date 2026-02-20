import React from 'react';
import ShoppingCartResponsive from '../../component/ShoppingCartResponsive/ShoppingCartResponsive';
import ProductCarousel from '../../component/ProductCarousel/ProductCarousel';

const CartPage = () => {
    return (
        <div>
            <ShoppingCartResponsive />
            <ProductCarousel />
        </div>
    );
};

export default CartPage;