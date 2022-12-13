import { useTheme, Box, Typography } from '@mui/material';
import { fontWeight } from '@mui/system';

import React from 'react'

const Header = ({ title, subheading }) => {
    const theme = useTheme();

    return (
        <Box>
            <Typography
                variant="h2"
                color={theme.palette.secondary[100]}
                fontWeight="bold"
                sx={{ mb: "5px" }}
            >
                {title}
            </Typography>
            <Typography
                variant="h5"
                color={theme.palette.secondary[300]}
            >
                {subheading}
            </Typography>
        </Box >
    )
}

export default Header
