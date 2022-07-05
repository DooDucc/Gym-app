import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/Logo.png';

const Navbar = () => {
    return (
        <Stack
            direction="row"
            justifyContent="space-around"
            sx={{
                gap: { sm: '122px', xs: '40px' },
                mt: { sm: '32px', xs: '20px' },
                justifyContent: 'none',
            }}
            px="20px"
        >
            <Link to="/">
                <img src={Logo} alt="Logo" style={{ width: '48px', height: '48px', margin: '0 20px' }} />
            </Link>
        </Stack>
    );
};

export default Navbar;
