import { createSlice } from '@reduxjs/toolkit'
//import type { PayloadAction } from '@reduxjs/toolkit'

export interface ViewState {
  isModalWelcomeOpen: Boolean
}

const initialState: ViewState = {
    isModalWelcomeOpen: true,
}

export const viewSlice = createSlice({
  name: 'view',
  initialState,
  reducers: {
    setIsModalWelcomeOpen: (state, action) => {
        state.isModalWelcomeOpen = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setIsModalWelcomeOpen } = viewSlice.actions

export default viewSlice.reducer