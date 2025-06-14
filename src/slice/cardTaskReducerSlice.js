import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from "uuid";

let cardArrData = [
    {
        id: "1",
        Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent.",
        Assignee: "Romona",
        // Status: 'To-do',
        Due_Date: "25-May-2020",
    },
    {
        id: "2",
        Description: "Fix Styling",
        Assignee: "Romona",
        // Status: 'To-do',
        Due_Date: "26-May-2020",
    },
    {
        id: "3",
        Description: "Handle Door Specs",
        Assignee: "Romona",
        // Status: 'To-do',
        Due_Date: "27-May-2020",
    },
    {
        id: "4",
        Description: "morbi",
        Assignee: "Kai",
        // Status: 'Done',
        Due_Date: "23-Aug-2020",
    },
    {
        id: "5",
        Description: "proin",
        Assignee: "Antoinette",
        // Status: 'In Progress',
        Due_Date: "05-Jan-2021",
    },
]

const initialState = {
    values: 'initial',
    cardInfo: {},
    openValue: false,
    cardData: cardArrData,
    storeColumnId: null,
    viewMode: "admin",
    buttonMode: null,
    cardItemsObj: {
        [uuidv4()]: {
            title: "To-do",
            items: cardArrData,
        },
        [uuidv4()]: {
            title: "In Progress",
            items: [],
        },
        [uuidv4()]: {
            title: "Done",
            items: [],
        },
    },
}
export const cardTaskReducerSlice = createSlice({
    name: 'cardTaskReger',
    initialState,
    reducers: {
        storeCardValue: (state, action) => {
            state.cardInfo = action.payload
        },
        openCard: (state, action) => {
            state.openValue = action.payload
        },
        storeColumnId: (state, action) => {
            state.storeColumnId = action.payload
        },
        updateCardItemsObj: (state, action) => {
            state.cardItemsObj = action.payload
        },
        updateRoles: (state, action) => {
            state.viewMode = action.payload
        },
        storeButtonName: (state, action) => {
            state.buttonMode = action.payload
        }

        // reducers functions to be added sequentially
    }
})




export const { storeCardValue, openCard, storeColumnId, updateCardItemsObj, updateRoles, storeButtonName } = cardTaskReducerSlice.actions

export default cardTaskReducerSlice.reducer
