import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import * as api from '../api/index'
import axios from "axios"

const initialState = {
    alldishes: [],
  }
// export const createCommande=createAsyncThunk('Create/Commande',async(id,commande)=>{
    
//     try {
//         const {data}=await axios.get(`https://lamineatbackend-lamineat.onrender.com/commands`)
//         console.log(data);
//         return {data}
//     } catch (error) {
//         console.log(error.message);
//     }
// })

  export const alldishesSlice=createSlice({
    name:"alldishes",
    initialState,
    reducers: {
        fetchAllDishes: (state,action) => {
            state.alldishes=action.payload
        }
    }
    // extraReducers:(builder)=>{
    //     builder.addCase(createCommande.pending,(state)=>{
    //         state.res=true
    //     })
    //     builder.addCase(createCommande.fulfilled,(state,action)=>{
    //         state.loading=false
    //         state.res=action.payload
    //         state.error=""
    //     })
    //     builder.addCase(createCommande.rejected,(state,action)=>{
    //         state.loading=false
    //         state.res={}
    //         state.error=action.error.message
    //     })
    // }
  })
  export const {fetchAllDishes}=alldishesSlice.actions
  
  export default alldishesSlice.reducer