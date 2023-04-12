import { createSlice } from '@reduxjs/toolkit'
//import type { PayloadAction } from '@reduxjs/toolkit'

export interface ViewState {
  isModalWelcomeOpen: Boolean,
  isModalAddPrestamistaOpen: Boolean
}

const initialState: ViewState = {
    isModalWelcomeOpen: true,
    isModalAddPrestamistaOpen: false
}

export const viewSlice = createSlice({
  name: 'view',
  initialState,
  reducers: {
    setIsModalWelcomeOpen: (state, action) => {
        state.isModalWelcomeOpen = action.payload
    },
    setIsModalAddPrestamistaOpen: (state, action) => {
        state.isModalAddPrestamistaOpen = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setIsModalWelcomeOpen, setIsModalAddPrestamistaOpen } = viewSlice.actions

export default viewSlice.reducer