import React from 'react';
import {Hero, Sales} from "../../components/index.js";
import {heroapi, popularsales, toprateslaes} from "../../data/data.js";

const MainPage = () => {
    return (
        <>
            <main className='flex flex-col gap-16 relative'>
                <Hero heroapi={heroapi}/>
                <Sales endpoint={popularsales} ifExists/>
                <Sales endpoint={toprateslaes}/>
            </main>
        </>
    );
};

export default MainPage;