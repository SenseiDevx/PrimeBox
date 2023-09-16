import React from 'react';
import { Footer, Navbar} from './components';
import {Route, Routes} from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage.jsx';
import AboutPage from "./pages/aboutPage/AboutPage.jsx";

const App = () => {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path='sneakerPage/:id' element={<AboutPage/>}/>
            </Routes>
            {/*<Footer/>*/}
        </>
    );
};

export default App;
