import {useNavigate, useParams} from "react-router-dom";
import NikeSales from "../../../components/NikeProducts/NikeSales.jsx";
import {nikeProduct} from "../../../data/data.js";
import {useState} from 'react';

const NikePage = ({ifExists}) => {
    const {id} = useParams();
    const navigate = useNavigate();
    const product = nikeProduct.items.find((item) => item.id === id);

    if (!product) {
        return <div>Товар не найден.</div>;
    }

    const [selectedImage, setSelectedImage] = useState(product.images[0]);

    const back = () => {
        navigate("/");
    };

    const changeSelectedImage = (image) => {
        setSelectedImage(image);
    };

    return (
        <>
            <div className="nike-container mt-24">
                <div className="flex justify-between lg:flex-col">
                    <div className="flex flex-wrap-reverse items-end">
                        <div className="mr-11 lg:flex">
                            {product.images.map((image, i) => (
                                <div
                                    key={i}
                                    className={`w-36 h-36 sm:w-24 sm:h-24 mr-20 border-2 rounded-2xl mb-7 cursor-pointer p-5  ${
                                        selectedImage === image ? 'border-blue-500 ' : ''
                                    }`}
                                    onClick={() => changeSelectedImage(image)}
                                >
                                    <img
                                        className="w-full h-full"
                                        src={image}
                                        alt={`Image ${i + 1}`}
                                    />
                                </div>
                            ))}
                        </div>
                        <div>
                            <div
                                className={`relative bg-gradient-to-b ${product.color} ${product.shadow} grid items-center ${
                                    ifExists ? "justify-items-start" : "justify-items-center"
                                } rounded-xl py-4 px-5 transition-all duration-700 ease-in-out w-full hover:scale-105`}
                                style={{width: "488px", height: "300px", marginBottom: "50px"}}
                            >
                                <img
                                    src={product.img}
                                    alt={product.title}
                                    className="w-400 h-400 relative rounded-xl py-4 px-5 transition-all duration-700 ease-in-out hover:scale-105 lg:flex justify-center items-center"
                                />
                            </div>
                            <div>
                                <h1 className="text-2xl text-white pb-2">Выбирайте ваш размер</h1>
                                <div className="flex gap-4">
                                    {product.sizes.map((size, i) => (
                                        <div key={i} className="border-2 w-45 h-45 p-1.5 rounded text-white cursor-pointer">
                                            {size}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div>
                            <h1>{product.title}</h1>
                            <p>{product.text}</p>
                        </div>
                    </div>

                </div>
            </div>
            <div className="mt-24">
                <NikeSales nikeProduct={nikeProduct}/>
            </div>
        </>
    );
};

export default NikePage;
