import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {Toaster} from 'react-hot-toast';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux/store.js";

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Provider store={store}>
            <Toaster position='top-center' reverseOrder={false}/>
            <App/>
        </Provider>
    </BrowserRouter>
)
