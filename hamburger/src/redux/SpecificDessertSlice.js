import axios from "axios";
import {createAsyncThunk,createSlice} from "@reduxjs/toolkit";




const initialState={
    DessertDetail:{},
    hasFetched:false,
}


export const getSpecificDesert=createAsyncThunk('getSpecificDesert',async (id)=>{
      
         const response=await axios.get(`https://pizza-and-desserts.p.rapidapi.com/desserts/${id}`,{
            headers: {
                'X-RapidAPI-Key': '87823a4242msh48e0f6be58fdbcfp1ef1d5jsnddf3646b89f4',
                'X-RapidAPI-Host': 'pizza-and-desserts.p.rapidapi.com'
              }
         })

        return response.data;     
})


const SpecificDessertSlice=createSlice({
       name:'SpecificPizza',
       initialState,
       reducers:{},
       extraReducers:(builder)=>{
           builder.addCase(getSpecificDesert.fulfilled,(state,action)=>{
               state.DessertDetail=action.payload;
               state.hasFetched=true;
           })
       }
});


export default SpecificDessertSlice.reducer;




