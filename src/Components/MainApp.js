import React from 'react';
import Kanban from './Kanban';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useSelector, useDispatch } from 'react-redux';
import { updateRoles } from "../slice/cardTaskReducerSlice";
import styled from "@emotion/styled";



export default function MainApp() {
    const LoginDiv = styled.div`
    display:flex;
    justify-content:flex-start;
    padding:15px;
    `
    const ViewMode = useSelector((state) => state.card.viewMode)
    const dispatch = useDispatch()
    return (
        <div>
            <LoginDiv>

                <FormControl sx={{ width: "20%" }}>
                    <InputLabel id="demo-simple-select-label">{"View Mode"}</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={ViewMode}
                        label={"View Mode"}
                        onChange={(e) => {
                            dispatch(updateRoles(e.target.value))
                        }}
                    >
                        <MenuItem value={"admin"}>Admin</MenuItem>
                        <MenuItem value={"basic-user"}>Basic User</MenuItem>
                    </Select>
                </FormControl>

            </LoginDiv>
            <Kanban />
        </div>
    )
}
