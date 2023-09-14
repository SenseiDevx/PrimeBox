import React from 'react';
import {Cart, Footer, Hero, Navbar, Sales,} from './components';
import {heroapi, popularsales, toprateslaes, footerAPI} from './data/data.js';

const App = () => {
    return (
        <>
            <Navbar/>
            <Cart/>
            <main className='flex flex-col gap-16 relative'>
                <Hero heroapi={heroapi}/>
                <Sales endpoint={popularsales} ifExists/>
                <Sales endpoint={toprateslaes}/>
            </main>
            <Footer footerAPI={footerAPI}/>
        </>
    )
}

export default App;