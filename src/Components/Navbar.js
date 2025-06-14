import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

export default function ButtonAppBar() {
    const fetchEmail = JSON.parse(localStorage.getItem("userValue"))
    console.log('email_', fetchEmail)
    let navigate = useNavigate();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: "flex", justifyContent: "flex-start" }}>
                        {fetchEmail?.email.includes('@') && Boolean(fetchEmail?.email_verified) == true ? "Kanban Dashboard" : "Navigation Bar"}
                    </Typography>
                    {fetchEmail?.email.includes('@') && Boolean(fetchEmail?.email_verified) == true &&
                        <Button
                            onClick={() => {
                                localStorage.clear();
                                navigate('/')
                            }}
                            color="inherit">Logout</Button>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
}