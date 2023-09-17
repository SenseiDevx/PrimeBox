import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setDescription, setTitle} from "../../redux/slices/whatsAppSlice.js";

const NewBalancePage = () => {

    const dispatch = useDispatch();
    const { title, description } = useSelector((state) => state.whatsAppReducer);

    const handleTitleChange = (e) => {
        dispatch(setTitle(e.target.value));
    };

    const handleDescriptionChange = (e) => {
        dispatch(setDescription(e.target.value));
    };

    const handleSendButtonClick = () => {
        const message = `${title}: ${description}`;
        const whatsappNumber = '+996708659585'; // Ваш WhatsApp номер
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, '_blank');
    };

    return (
        <div className="nike-container mt-24">

            <input type="text" placeholder="Заголовок" value={title} onChange={handleTitleChange} />
            <textarea placeholder="Описание" value={description} onChange={handleDescriptionChange} />
            <button onClick={handleSendButtonClick}>Отправить</button>
        </div>
    );
};

export default NewBalancePage;