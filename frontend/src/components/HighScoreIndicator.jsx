import React from 'react';
import { Box, Typography, Tooltip, Chip } from '@mui/material';
import { EmojiEvents as TrophyIcon } from '@mui/icons-material';

const HighScoreIndicator = ({ highScore }) => {
    return (
        <Tooltip title="Your highest score achieved">
            <Chip
                icon={<TrophyIcon sx={{ color: 'var(--warning)' }} />}
                label={
                    <Typography
                        variant="body2"
                        sx={{
                            fontWeight: 600,
                            color: 'var(--foreground)',
                            fontSize: '0.875rem'
                        }}
                    >
                        {highScore ? highScore : 0}
                    </Typography>
                }
                sx={{
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    '&:hover': {
                        background: 'var(--surface1)',
                        transform: 'scale(1.02)',
                    },
                    transition: 'all 0.2s ease-in-out',
                    height: 36,
                    px: 1
                }}
            />
        </Tooltip>
    );
};

export default HighScoreIndicator; 