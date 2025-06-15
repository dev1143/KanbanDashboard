import { configureStore } from '@reduxjs/toolkit'
import cardTaskReducer from "../slice/cardTaskReducerSlice"

export const store = configureStore({
    reducer: {
        card: cardTaskReducer,
    },
})

