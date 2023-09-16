import React from "react";
import {useNavigate, useParams} from "react-router-dom";
import {toprateslaes} from "../../data/data.js";

const AboutPage = () => {
    const { id } = useParams();
    const navigate = useNavigate()
    const product = toprateslaes.items.find((item) => item.id === id);

    if (!product) {
        return <div>Товар не найден.</div>;
    }

    const back = () => {
        navigate("/")
    }

    return (
        <div className="nike-container mt-24">
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded shadow-md transition duration-300 ease-in-out transform hover:scale-105"
                onClick={back}>Назад</button>
            <h1>{product.title}</h1>
            <p>{product.text}</p>
        </div>
    );
};

export default AboutPage;