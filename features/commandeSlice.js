import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import * as api from '../api/index'
import axios from "axios"

const initialState = {
    res: [],
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

  export const commandeSlice=createSlice({
    name:"commande",
    initialState,
    reducers: {
        CreateCommande: (state,action) => {
            state.res=[...state.res, action.payload]
        },
        updateCommande: (state,action) => {
            state.res=state.res.map(command=>command._id===action.payload._id?action.payload:command)
        }
        
    }
  
  })
  export const {CreateCommande,updateCommande}=commandeSlice.actions
  
  export default commandeSlice.reducer