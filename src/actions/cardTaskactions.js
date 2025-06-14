import { updateCardItemsObj } from "../slice/cardTaskReducerSlice"


export function storeCardDataValue() {
    return async (dispatch, getState) => {
        try {
            const storeCol = getState().card;
            const { storeColumnId, cardItemsObj, cardInfo } = storeCol;

            // Clone the outer object
            const cloneCardObj = { ...cardItemsObj };

            // Clone the nested column object and its items array
            const column = {
                ...cloneCardObj[storeColumnId],
                items: cloneCardObj[storeColumnId].items.map(item =>
                    item.id === cardInfo.id ? cardInfo : item
                )
            };

            // Update the cloned object
            cloneCardObj[storeColumnId] = column;
            console.log('cardObj__', cloneCardObj)
            dispatch(updateCardItemsObj(cloneCardObj))

        } catch (err) {
            console.error('Error updating card:', err);
        }
    };
}




