import React from 'react';
import {Route, Routes} from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage.jsx';
import NikePage from "./pages/AboutPages/NikePage/NikePage.jsx";
import Navbar from "./components/Navbar.jsx";
import NewBalancePage from "./pages/AboutPages/NewBalancePage.jsx";
import {nikeProduct} from "./data/data.js";

const App = () => {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path='nike/:id' element={<NikePage ifExists={nikeProduct}/>}/>
                <Route path='newBalance' element={<NewBalancePage/>}/>
            </Routes>
            {/*<Footer/>*/}
        </>
    );
};

export default App;
