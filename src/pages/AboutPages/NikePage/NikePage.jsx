import {useNavigate, useParams} from "react-router-dom";
import NikeSales from "../../../components/NikeProducts/NikeSales.jsx";
import {nikeProduct} from "../../../data/data.js";

const NikePage = ({ ifExists }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const product = nikeProduct.items.find((item) => item.id === id);

    if (!product) {
        return <div>Товар не найден.</div>;
    }

    const back = () => {
        navigate("/");
    };

    return (
        <>
            <div className="nike-container mt-24">
                <div className="flex ">
                    <div>
                        <button
                            className="bg-blue-500 text-white py-2 px-4 rounded shadow-md transition duration-300 ease-in-out transform"
                            onClick={back}
                        >
                            Назад
                        </button>
                        <div
                            className={`relative bg-gradient-to-b ${product.color} ${product.shadow} grid items-center ${
                                ifExists ? "justify-items-start" : "justify-items-center"
                            } rounded-xl py-4 px-5 transition-all duration-700 ease-in-out w-full hover:scale-105`}
                            style={{ width: "500px", height: "500px" }}
                        >
                            <img
                                src={product.img}
                                alt={product.title}
                                className="w-400 h-400 relative rounded-xl py-4 px-5 transition-all duration-700 ease-in-out hover:scale-105"
                            />
                        </div>
                    </div>
                    <div>
                        <h1>{product.title}</h1>
                        <p>{product.text}</p>
                    </div>
                </div>
            </div>
            <NikeSales nikeProduct={nikeProduct} />
        </>
    );
};

export default NikePage;
