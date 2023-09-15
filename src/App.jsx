import React from 'react';
import { Footer, Navbar} from './components';
import {Route, Routes} from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage.jsx';

const App = () => {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
            </Routes>
            <Footer/>
        </>
    );
};

export default App;
