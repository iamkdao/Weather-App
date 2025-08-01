import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';

const LoadingSpinner = ({ message = "Loading..." }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                py: 4,
                gap: 2
            }}
        >
            <CircularProgress
                size={40}
                sx={{
                    color: 'var(--primary)',
                    '& .MuiCircularProgress-circle': {
                        strokeLinecap: 'round',
                    },
                }}
            />
            <Typography
                variant="body1"
                sx={{
                    color: 'var(--muted)',
                    fontWeight: 500,
                    textAlign: 'center'
                }}
            >
                {message}
            </Typography>
        </Box>
    );
};

export default LoadingSpinner; 