import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                mt: 'auto',
                py: 3,
                px: 2,
                textAlign: 'center',
                borderTop: '1px solid var(--border)',
                background: 'var(--surface)',
            }}
        >
            <Typography
                variant="body2"
                sx={{
                    color: 'var(--muted)',
                    '& a': {
                        color: 'var(--primary)',
                        textDecoration: 'none',
                        '&:hover': {
                            textDecoration: 'underline',
                        },
                    },
                }}
            >
                Built with ❤️ using React, Material-UI, and OpenWeatherMap API
            </Typography>
        </Box>
    );
};

export default Footer; 