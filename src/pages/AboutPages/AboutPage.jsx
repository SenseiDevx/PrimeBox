import {useNavigate, useParams} from "react-router-dom";
import NikeSales from "../../components/NikeProducts/NikeSales.jsx";
import {nikeProduct} from "../../data/data.js";
import {useEffect, useState} from 'react';
import Swal from "sweetalert2";
import styles from './aboutpage.module.css'

const AboutPage = ({ifExists}) => {
    const {id} = useParams();
    const product = nikeProduct.items.find((item) => item.id === id);
    const [selectedSize, setSelectedSize] = useState("");
    const [selectedImageInfo, setSelectedImageInfo] = useState(product.images[0]);
    const [selectedColorDescription, setSelectedColorDescription] = useState("");
    const [selectedSizePrice, setSelectedSizePrice] = useState(null);

    useEffect(() => {
        if (selectedSize && selectedImageInfo) {
            const sizePrice = selectedImageInfo.sizes[selectedSize];
            setSelectedSizePrice(sizePrice);
        } else {
            setSelectedSizePrice(null);
        }
    }, [selectedSize, selectedImageInfo]);

    const handleSizeClick = (size) => {
        setSelectedSize(size);

        const selectedImageInfoForSize = product.images.find((imageData) => imageData.src === selectedImageInfo.src);

        if (selectedImageInfoForSize && selectedImageInfoForSize.sizes[size]) {
            setSelectedSizePrice(selectedImageInfoForSize.sizes[size]);
        } else {
            setSelectedSizePrice(null);
        }
    };

    const handleBuyClick = () => {
        if (!selectedSize || !selectedImageInfo) {
            Swal.fire("Выберите размер и рассветку, прежде чем купить товар.");
            return;
        }

        const message = `Артикул: ${product.id}\nНазвание: ${product.title}\nРазмер: ${selectedSize}\nЦвет: ${selectedColorDescription}\nИтого: ${selectedSizePrice} Сом`;
        const whatsappNumber = "+996708659585";
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, "_blank");
    };

    const changeSelectedImage = (image) => {
        const selectedImageData = product.images.find((imageData) => imageData.src === image);
        setSelectedImageInfo(selectedImageData);
        setSelectedColorDescription(selectedImageData.description);
    };

    if (!product || !product.images || product.images.length === 0) {
        return <div>Товар не найден.</div>;
    }

    return (
        <>
            <div className={styles.allBlock}>
                <div className={styles.firstBlock}>
                    <div className={styles.blockSelect}>
                        <div className={styles.images}>
                            {product.images.map((imageData, i) => (
                                <div key={i} className="mb-7">
                                    <div
                                        className={`${styles.myCustomClass} ${selectedImageInfo.src === imageData.src ? styles.selected : ''}`}
                                        onClick={() => changeSelectedImage(imageData.src)}>
                                        <img className={styles.img} src={imageData.src} alt={`Image ${i + 1}`}/>
                                    </div>
                                    <div
                                        className="text-center text-white text-2xl sm:text-1xl">{imageData.description}</div>
                                </div>
                            ))}
                        </div>
                        <div>
                            <div
                                className={`relative bg-gradient-to-b ${product.color} ${product.shadow} grid items-center rounded-xl py-4 px-5 transition-all duration-700 ease-in-out w-full hover:scale-105 my-container`}
                                style={{height: "300px", marginBottom: "50px", marginRight: "15px"}}>
                                <img src={selectedImageInfo.src} alt={product.title}
                                     className="w-400 h-400 sm:w-300 sm:h-300 relative rounded-xl py-4 px-5 transition-all duration-700 ease-in-out hover:scale-105 lg:flex justify-center items-center"/>
                            </div>
                            <div className="flex-wrap">
                                <h1 className="text-2xl text-white pb-2">размер</h1>
                                <div className="flex gap-3 flex-wrap mb-10 w-100">
                                    {Object.keys(selectedImageInfo.sizes)
                                        .map((size) => parseFloat(size))
                                        .sort((a, b) => a - b)
                                        .map((size, i) => (
                                            <div
                                                key={i}
                                                className={`border-2 w-45 h-45 p-1.5 rounded text-white cursor-pointer ${selectedSize === size ? "bg-blue-500 text-black" : ""}`}
                                                onClick={() => handleSizeClick(size)}
                                            >
                                                {size}
                                            </div>
                                        ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.secondBlock}>
                    <div className={styles.textBlock}>
                        <h1 className={styles.h1}>
                            {product.title}:
                        </h1>
                        <p className="text-white text-3xl">От {product.price} <span
                            className="text-opacity-60 text-gray-100 text-3xl">Сом</span></p>
                    </div>
                    <div className="border-2 border-blue-400 p-5 w-96 rounded-2xl sm:w-64">
                        <h4 className="text-white mb-5 text-2xl">Артикул: {product.id}</h4>
                        <h3 className="text-white mb-5 text-2xl sm:text-1xl">Название: {product.title}</h3>
                        <p className="text-white mb-5 text-2xl sm:text-1xl">
                            Размер: {selectedSize}
                        </p>
                        <h4 className="text-white mb-5 text-2xl sm:text-1xl">Цвет: {selectedColorDescription}</h4>
                        <h4 className="text-white mb-5 text-2xl sm:text-1xl">Цена: {selectedSizePrice} <span
                            className="text-opacity-60 text-gray-100 text-3xl">Сом</span></h4>
                        <button
                            className={`relative bg-gradient-to-b ${product.color} ${product.shadow} grid items-center ${
                                ifExists ? 'justify-items-start' : 'justify-items-center'
                            } rounded-xl py-4 px-5 transition-all duration-700 ease-in-out w-full`}
                            style={{width: '180px', color: 'white'}}
                            onClick={handleBuyClick}
                        >
                            Оформить заказ
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutPage;
