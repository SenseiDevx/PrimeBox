// formSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    title: '',
    description: '',
};

const whatsAppSlice = createSlice({
    name: 'whatsAppSlice',
    initialState,
    reducers: {
        setTitle: (state, action) => {
            state.title = action.payload;
        },
        setDescription: (state, action) => {
            state.description = action.payload;
        },
    },
});

export const { setTitle, setDescription } = whatsAppSlice.actions;
export default whatsAppSlice.reducer;
