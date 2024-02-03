import axios from "axios";
import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";


const initialState={
    CategoryData:[],
    hasFetched:false,
}

export const getCategories=createAsyncThunk('getHamburgers',async ()=>{
       try {
          const response=await axios.get('https://pizza-and-desserts.p.rapidapi.com/pizzas',{
            headers: {
                'X-RapidAPI-Key': '87823a4242msh48e0f6be58fdbcfp1ef1d5jsnddf3646b89f4',
                'X-RapidAPI-Host': 'pizza-and-desserts.p.rapidapi.com'
              }
          });
           
          
           return response.data;
          

       } catch (error) {
            console.log(error);
            throw error;
       }
})


const AllCategoriesSlice=createSlice({
    name:'HamburgerAll',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getCategories.fulfilled,(state,action)=>{
             state.CategoryData=action.payload;
             state.hasFetched=true;
        })
    }
})

export default AllCategoriesSlice.reducer;

