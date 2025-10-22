import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { IModalState } from './types'

const initialState: IModalState = {
  isOpen: false,
}

export const authModalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setIsAuthModalOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload
    },
  },
  selectors: {
    selectAuthModalState: (state) => state.isOpen,
  },
})

export const { setIsAuthModalOpen } = authModalSlice.actions
export const { selectAuthModalState } = authModalSlice.selectors
