import {configureStore} from "@reduxjs/toolkit";
import whatsAppReducer from './slices/whatsAppSlice.js'

const store = configureStore({
    reducer: {
        whatsAppReducer
    }
})

export default store