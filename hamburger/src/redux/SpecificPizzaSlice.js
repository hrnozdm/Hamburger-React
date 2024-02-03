import axios from "axios";
import {createAsyncThunk,createSlice} from "@reduxjs/toolkit";




const initialState={
    pizzaDetailData:{},
    hasFetched:false,
}


export const getSpecificPizza=createAsyncThunk('getSpecificPizza',async (id)=>{
      
         const response=await axios.get(`https://pizza-and-desserts.p.rapidapi.com/pizzas/${id}`,{
            headers: {
                'X-RapidAPI-Key': '87823a4242msh48e0f6be58fdbcfp1ef1d5jsnddf3646b89f4',
                'X-RapidAPI-Host': 'pizza-and-desserts.p.rapidapi.com'
              }
         })

        return response.data;     
})


const SpecificPizzaSlice=createSlice({
       name:'SpecificPizza',
       initialState,
       reducers:{},
       extraReducers:(builder)=>{
           builder.addCase(getSpecificPizza.fulfilled,(state,action)=>{
               state.pizzaDetailData=action.payload;
               state.hasFetched=true;
           })
       }
});


export default SpecificPizzaSlice.reducer;
