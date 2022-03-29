import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
    value: number;
}

const initialState: CounterState = {
    value:10,
};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        //increment
        incremented(state){
            state.value++;
        },
        //decrement
        decrement(state){
            state.value--;
        },
        //reset
        reset(state){
            state.value=0;
        },
    }
});

export const { incremented } = counterSlice.actions;
export default counterSlice.reducer;