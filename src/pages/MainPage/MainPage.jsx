import React from 'react';
import {newBalanceProduct, nikeProduct} from "../../data/data.js";
import Hero from "../../components/Hero.jsx";
import NikeSales from "../../components/NikeProducts/NikeSales.jsx";
import NewBalanceSales from "../../components/NewBalance/NewBalanceSales.jsx";

const MainPage = () => {
    return (
        <>
            <main className='flex flex-col gap-16 relative'>
                <Hero/>
                <NikeSales nikeProduct={nikeProduct}/>
                <NewBalanceSales newBalanceProduct={newBalanceProduct}/>
            </main>
        </>
    );
};

export default MainPage;