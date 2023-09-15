import React, {useEffect, useRef, useState} from 'react';
import heroImg from '../assets/hero.png';
import {toprateslaes} from '../data/data.js';

const Hero = () => {
    const [searchText, setSearchText] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const handleInputChange = (e) => {
        const text = e.target.value;
        setSearchText(text);

        if (text !== '') {
            setIsDropdownOpen(true); // Открывать выпадающий список, если инпут не пустой
        } else {
            setIsDropdownOpen(false); // Закрывать выпадающий список, если инпут пустой
        }
    };


    useEffect(() => {
        // Обработчик события клика на всем документе
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false); // Закрываем выпадающий список
            }
        };

        // Добавляем обработчик при монтировании компонента
        document.addEventListener('click', handleClickOutside);

        // Удаляем обработчик при размонтировании компонента
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const filteredSales = toprateslaes.items.filter(item =>
        item.title.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <>
            <div className='relative h-auto w-auto flex flex-col'>
                <div
                    className='bg-theme clip-path h-[85vh] lg:h-[75vh] md:h-[65vh] sm:h-[55vh] w-auto absolute top-0 left-0 right-0 opacity-100 z-10'></div>
                <div className='relative opacity-100 z-20 grid items-center justify-items-center nike-container'>
                    <div className='grid items-center justify-items-center mt-28 md:mt-24'>
                        <h1 className='text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-extrabold filter drop-shadow-sm text-slate-200'>Ваш
                            выбор - PrimeBox</h1>
                    </div>
                    <div className="mb-16 mt-5">
                        <input
                            placeholder='Искать...'
                            type="text"
                            value={searchText}
                            onChange={handleInputChange}
                            className="opacity-100 z-[200] blur-effect-theme rounded outline-none w-96 h-10 p-5 text-2xl text-white placeholder-white sm:w-64"
                        />
                        <div ref={dropdownRef}>
                            {isDropdownOpen && (
                                <div className=" opacity-100 z-[200] blur-effect-theme h-44 overflow-scroll">
                                    {filteredSales.map(sale => (
                                        <div key={sale.id} className="p-5 cursor-pointer hover:bg-input">
                                            <h2>{sale.title}</h2>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <img
                            src={heroImg}
                            alt='hero-img/img'
                            className='w-auto h-[45vh] lg:h-[35vh] md:h-[31vh] sm:h-[21vh] xsm:h-[19vh] transitions-theme -rotate-[25deg] hover:rotate-0 cursor-pointer object-fill'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;
