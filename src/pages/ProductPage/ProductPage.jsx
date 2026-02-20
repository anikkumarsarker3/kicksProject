import React from 'react';
import ProductCarousel from '../../component/ProductCarousel/ProductCarousel';
import ProductDetails from '../../component/ProductDetails/ProductDetails';

const ProductPage = () => {
    return (
        <div>
            <ProductDetails />
            <ProductCarousel />
        </div>
    );
};

export default ProductPage;