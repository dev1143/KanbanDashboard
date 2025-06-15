import * as React from 'react';
import {
    Button, Dialog, DialogActions,
    DialogContent, DialogContentText, DialogTitle, TextField
} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { openCard, storeCardValue } from '../slice/cardTaskReducerSlice';
import { storeCardDataValue } from "../actions/cardTaskactions";
import { ToastContainer, toast } from 'react-toastify';
import moment from "moment";

export default function OpenModal() {
    const { viewMode, buttonMode } = useSelector((state) => state.card)
    const dispatch = useDispatch();
    const { cardInfo = {}, openValue } = useSelector((state) => state.card);
    const [value, setValue] = React.useState("")

    const handleChange = (e) => {
        dispatch(storeCardValue({
            ...cardInfo,
            [e.target.name]: e.target.value
        }));
    };

    const handleSave = () => {
        dispatch(storeCardDataValue());
        dispatch(openCard(false));
        toast('Saved Succesfullly!')
    };
    console.log('buttonMode__', buttonMode)
    return (
        <Dialog
            open={openValue}
            onClose={() => dispatch(openCard(false))}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                Edit Card Info
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <TextField
                        fullWidth
                        name="Description"
                        value={cardInfo.Description || ""}
                        onChange={handleChange}
                        label="Description"
                        variant="outlined"
                        margin="dense"
                    />
                    <TextField
                        fullWidth
                        name="Assignee"
                        value={cardInfo.Assignee || ""}
                        onChange={handleChange}
                        label="Assignee"
                        variant="outlined"
                        margin="dense"
                    />

                    <TextField
                        type="date"
                        inputformat="dd/MM/yyyy"
                        fullWidth
                        name="Due_Date"
                        value={moment(cardInfo.Due_Date)
                            .format("YYYY/MM/DD")
                            .split("/")
                            .join("-") || ""}
                        onChange={handleChange}
                        label="Due Date"
                        variant="outlined"
                        margin="dense"
                    />
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                {viewMode && viewMode == "admin" && buttonMode && buttonMode != "View" &&
                    <>
                        <Button onClick={handleSave}>Save</Button>
                        <Button onClick={() => dispatch(openCard(false))} autoFocus>
                            Cancel
                        </Button>
                    </>
                }
            </DialogActions>
        </Dialog>
    );
}
