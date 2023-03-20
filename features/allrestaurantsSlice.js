import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import * as api from '../api/index'
import axios from "axios"

const initialState = {
    allrestaurants: [],
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

  export const allrestaurantsSlice=createSlice({
    name:"allrestaurants",
    initialState,
    reducers: {
        fetchAllRestaurants: (state,action) => {
            state.allrestaurants=action.payload
        },
        categoryRestaurants: (state,action) => {
          console.log(action.payload);
            state.allrestaurants=state.allrestaurants.filter(item=>item.category==action.payload )
        },
       
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
  export const {fetchAllRestaurants,categoryRestaurants}=allrestaurantsSlice.actions
  
  export default allrestaurantsSlice.reducer