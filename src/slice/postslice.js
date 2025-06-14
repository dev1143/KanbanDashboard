import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    values: 'initial',
    listofPosts: [],
    topPriorityPost: [],
    userValue: []
}
export const postslice = createSlice({
    name: 'poster',
    initialState,
    reducers: {
        userlocalData: (state, action) => {
            state.userValue = action.payload
            console.log('login store____', state.userValue)
        },
        postaddition: (state, action) => {
            console.log(state)
            state.values = action.payload
        },
        viewPost: (state, action) => {
            state.listofPosts = action.payload
        },
        topPriorityPost: (state, action) => {
            state.topPriorityPost = [action.payload]
        }

        // reducers functions to be added sequentially
    }
})




export const { postaddition, viewPost, topPriorityPost, userlocalData } = postslice.actions

export default postslice.reducer
