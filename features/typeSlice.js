import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

export const typeSlice = createSlice({
  name: 'type',
  initialState,
  reducers: {
    addToType: (state,action) => {
 
      state.items =action.payload
    },
   
   
  },
})
export const {addToType}=typeSlice.actions

export default typeSlice.reducer