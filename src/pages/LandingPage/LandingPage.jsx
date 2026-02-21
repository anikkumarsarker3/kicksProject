import React from 'react';
import DoItRight from '../../component/DoitRight/DoItRight';
import HeroProduct from '../../component/HeroProduct/HeroProduct';
import NewDrops from '../../component/NewDrops/NewDrops';
import CategoriesSection from '../../component/CategoriesSection/CategoriesSection';
import ReviewsSection from '../../component/ReviewsSection/ReviewsSection';

const LandingPage = () => {
    return (
        <div>
            <DoItRight />
            <HeroProduct />
            <NewDrops />
            <CategoriesSection />
            <ReviewsSection />
        </div>
    );
};

export default LandingPage;
