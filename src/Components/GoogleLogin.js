import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import { Box, Paper } from '@mui/material';
import styled from "@emotion/styled";

export default function GoogleLoginApp() {
    let navigate = useNavigate();
    const GoogleStyle = styled.div`
    min-width:15%;
    display: flex;
    justify-content:center;
    margin: 0 auto;
    margin-top:5rem;
    `
    return (
        <Box>
            <GoogleStyle>
                <GoogleLogin
                    onSuccess={credentialResponse => {
                        console.log(jwtDecode(credentialResponse.credential));
                        let storeVal = jwtDecode(credentialResponse.credential)
                        if (storeVal.email_verified && storeVal.email.includes('@')) {
                            localStorage.setItem("userValue", JSON.stringify(jwtDecode(credentialResponse.credential)))
                            navigate('/login')
                        }
                    }}
                    onError={() => {
                        console.log('Login Failed');
                    }}
                    useOneTap
                />
            </GoogleStyle>
        </Box>

    )
}
