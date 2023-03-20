import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  catego: [],
}

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    addToCategory: (state,action) => {
 
      state.catego= action.payload
    },
   
   
  },
})
export const {addToCategory}=categorySlice.actions

export default categorySlice.reducer