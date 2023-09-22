import React from 'react';
import {Route, Routes} from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage.jsx';
import AboutPage from "./pages/AboutPages/AboutPage.jsx";
import Navbar from "./components/Navbar.jsx";
import {nikeProduct} from "./data/data.js";

const App = () => {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path='nike/:id' element={<AboutPage ifExists={nikeProduct}/>}/>
            </Routes>
            {/*<Footer/>*/}
        </>
    );
};

export default App;
