import {createSlice} from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name:'counter',
    initialState:{
        value:0
    },
    reducers:{
        update:(state,data)=>{
            console.log(data);
            state.value+=1
        },
        decrement:(state)=>{
            if(state==0){
                state.value =0;
            }
            else{
                state.value= state.value-1;
            }
        }
    }

});

export const {update,decrement} = counterSlice.actions;

export default counterSlice.reducer;