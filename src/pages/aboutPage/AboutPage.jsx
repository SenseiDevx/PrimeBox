import React, {useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {toprateslaes} from "../../data/data.js";
import down from '../../assets/down.svg'
import up from '../../assets/up.svg'

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


    const [selectedOption, setSelectedOption] = useState('option1'); // Устанавливаем начальное значение

    const handleChange = (e) => {
        setSelectedOption(e.target.value);
    };

    return (
        <div className="nike-container mt-24">
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded shadow-md transition duration-300 ease-in-out transform hover:scale-105"
                onClick={back}>Назад</button>
            <h1>{product.title}</h1>
            <p>{product.text}</p>
            <img src={product.img} alt={product.title}/>
            <div className="relative inline-block text-left">
                <select
                    value={selectedOption}
                    onChange={handleChange}
                    className="appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>
                <img src={down} alt="down"/>
                <img src={up} alt="up"/>
            </div>
        </div>
    );
};

export default AboutPage;
