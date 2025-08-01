import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { IconButton, Tooltip, Box, Typography } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { connect } from 'react-redux';
import { mapStateToProps } from './connectors/weatherConnectors';
import HighScoreIndicator from './HighScoreIndicator';

const Header = ({ highScore }) => {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1rem 2rem',
                backgroundColor: 'var(--surface)',
                borderBottom: '1px solid var(--border)',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                position: 'sticky',
                top: 0,
                zIndex: 1000,
                backdropFilter: 'blur(10px)',
            }}
        >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Typography
                    variant="h4"
                    component="h1"
                    sx={{
                        fontWeight: 700,
                        background: 'linear-gradient(135deg, var(--primary), var(--accent))',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                    }}
                >
                    🌍 DashZone
                </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <HighScoreIndicator highScore={highScore} />
                <Tooltip title={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}>
                    <IconButton
                        onClick={toggleTheme}
                        sx={{
                            color: 'var(--foreground)',
                            backgroundColor: 'var(--surface)',
                            border: '1px solid var(--border)',
                            '&:hover': {
                                backgroundColor: 'var(--surface1)',
                                transform: 'scale(1.05)',
                            },
                            transition: 'all 0.2s ease-in-out',
                        }}
                    >
                        {isDarkMode ? <Brightness7 /> : <Brightness4 />}
                    </IconButton>
                </Tooltip>
            </Box>
        </Box>
    );
};

export default connect(mapStateToProps)(Header); 