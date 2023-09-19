import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import logo from '../assets/logo.png';
import {Link} from "react-router-dom";

const Navbar = () => {
    const [navState, setNavState] = useState(false);

    const onNavScroll = () => {
        if (window.scrollY > 30) {
            setNavState(true);
        } else {
            setNavState(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', onNavScroll);

        return () => {
            window.removeEventListener('scroll', onNavScroll);
        }
    }, []);
    return (
        <>
            <header className={
                !navState ? 'absolute top-7 left-0 right-0 opacity-100 z-50' : 'fixed top-0 left-0 right-0 h-[9vh] flex items-center justify-center opacity-100 z-[200] blur-effect-theme'
            }>
                <nav className='flex items-center justify-between nike-container'>
                    <div className='flex items-center'>
                        <img
                            src={logo}
                            alt="logo/img"
                            className={`w-16 h-auto ${navState && "filter brightness-0"}`}
                        />
                    </div>
                    <ul className="flex gap-4">
                        <Link to="newBalance"><li className={`w-16 h-auto text-white cursor-pointer ${navState && "filter brightness-0"}`}>Nike</li></Link>
                        <li className={`w-16 h-auto text-white cursor-pointer ${navState && "filter brightness-0"}`}>Adidas</li>
                        <li className={`w-16 h-auto text-white cursor-pointer ${navState && "filter brightness-0"}`}>Li-Ning</li>
                    </ul>

                </nav>
            </header>
        </>
    )
}

export default Navbar