import {createAsyncThunk,createSlice} from '@reduxjs/toolkit'
import axios from "axios"


const url="https://api.spacexdata.com/v4/capsules"

export const getCapsuleAsyncSearch=createAsyncThunk('Capsule/getCapsule',async(props,thunkAPI)=>{
 
    try { 
        console.log("res")
        const resp = await axios.get(`${url}`);
       
        return resp.data;
      } catch (error) {
        console.log(error)
        return thunkAPI.rejectWithValue('something went wrong');
      }
})

export const getCapsuleAsync=createAsyncThunk('Capsule/getCapsule',async(props,thunkAPI)=>{
    const {status,original_launch,type} = props
     
    try {
        const resp = await axios.get(`${url} ?status=${status}&original_launch=${original_launch}&type=${type}`);
        return resp.data;
      } catch (error) {
        return thunkAPI.rejectWithValue('something went wrong');
      }
})

 

 





export const CapsuleSlice=createSlice({
    name:"Capsule",
    initialState:{
        Capsules:[],
        loading:false,
        error:false
    },

     reducers:{},

   

    extraReducers:{
         


        [getCapsuleAsync.pending]: (state, action) => {
            state.error = false;
        state.loading = true;
		},

        [getCapsuleAsync.fulfilled]: (state, action) => {
           
            state.loading = false;
            state.Capsules = action.payload            ;
            state.error = false;
		},
        [getCapsuleAsync.rejected]: (state, action) => {
			state.error = true;
            
		},


        [getCapsuleAsyncSearch.pending]: (state, action) => {
            state.error = false;
           state.loading = true;
		},

        [getCapsuleAsyncSearch.fulfilled]: (state, action) => {
           
            state.loading = false;
            state.Capsules = action.payload           ;
            state.error = false;
		},
        [getCapsuleAsyncSearch.rejected]: (state, action) => {
			state.error = true;
            
		},


        
      



       

    }
})

export default CapsuleSlice.reducer