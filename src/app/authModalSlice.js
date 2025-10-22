import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    isOpen: false,
};
export const authModalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setIsAuthModalOpen: (state, action) => {
            state.isOpen = action.payload;
        },
    },
    selectors: {
        selectAuthModalState: (state) => state.isOpen,
    },
});
export const { setIsAuthModalOpen } = authModalSlice.actions;
export const { selectAuthModalState } = authModalSlice.selectors;
