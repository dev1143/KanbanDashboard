import { configureStore } from '@reduxjs/toolkit'
// import postReducer from "../slice/postslice"
import cardTaskReducer from "../slice/cardTaskReducerSlice"

export const store = configureStore({
    reducer: {
        card: cardTaskReducer,
    },
})

