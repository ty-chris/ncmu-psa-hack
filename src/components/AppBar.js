import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import logo from '../PSAI_Logo_Padded.png';

export default function ButtonAppBar() {
    /* const classes = styles(); */
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <img
                        src={logo}
                        alt=""
                        style={{ height: '40px', width: '40px' }}
                    />
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        PSA Hackathon Problem Statement
                    </Typography>
                    <Button color="inherit">Hello</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
