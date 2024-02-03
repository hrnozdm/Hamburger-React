import axios from "axios";
import { createAsyncThunk,createSlice} from "@reduxjs/toolkit";

const initialState={
    DesertData:[],
    fetchData:false,
};


export const getDesertAll=createAsyncThunk('getDesertAll',async ()=>{
    try {
        const response=await axios.get('https://pizza-and-desserts.p.rapidapi.com/desserts',{
            headers: {
                'X-RapidAPI-Key': '87823a4242msh48e0f6be58fdbcfp1ef1d5jsnddf3646b89f4',
                'X-RapidAPI-Host': 'pizza-and-desserts.p.rapidapi.com'
              }
        });

        return response.data;
    }catch (error) {
        console.log(error);
        throw error;
    }
})

const DesertSlice=createSlice({
    name:'DesertSlice',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
          builder.addCase(getDesertAll.fulfilled,(state,action)=>{
                state.DesertData=action.payload;
                state.fetchData=true;
          });
    }
})


export default DesertSlice.reducer;
