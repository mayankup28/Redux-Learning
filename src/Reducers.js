import {createReducer} from "@reduxjs/toolkit"

const initialState={
    c:0
}

export const coustomReducers=createReducer(initialState,{
    increment:(state,action)=>{
        state.c=state.c+1
    },

    incrementByValue:(state,action)=>{
        state.c=state.c+1
        state.c+=action.payload
    },

    decrement:(state,action)=>{
        state.c=state.c-1
    }
})