import React, { useState } from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './connectors/weatherConnectors';
import {
    Box,
    TextField,
    Button,
    Paper,
    InputAdornment,
    IconButton
} from '@mui/material';
import {
    Search as SearchIcon,
    Clear as ClearIcon
} from '@mui/icons-material';

export function SearchBar({ city, fetchWeather, setCity }) {
    const [inputValue, setInputValue] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        if (inputValue.trim() !== '') {
            setCity(inputValue);
        }
    };

    const handleClear = () => {
        setInputValue('');
        setCity('');
    };

    return (
        <Box sx={{ maxWidth: 600, mx: 'auto', mt: 4, p: 2 }}>
            <Paper
                component="form"
                onSubmit={handleSearch}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderRadius: 3,
                    overflow: 'hidden',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    '&:hover': {
                        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
                    },
                    transition: 'all 0.3s ease'
                }}
            >
                <TextField
                    fullWidth
                    placeholder="Enter a city name to search weather..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    variant="standard"
                    slotProps={{
                        disableUnderline: true,
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon sx={{ color: 'var(--muted)', ml: 2 }} />
                            </InputAdornment>
                        ),
                        endAdornment: inputValue && (
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={handleClear}
                                    sx={{ color: 'var(--muted)', mr: 1 }}
                                >
                                    <ClearIcon />
                                </IconButton>
                            </InputAdornment>
                        ),
                        sx: {
                            color: 'var(--foreground)',
                            fontSize: '1.1rem',
                            fontWeight: 500,
                            px: 2,
                            py: 1.5,
                            '&::placeholder': {
                                color: 'var(--muted)',
                                opacity: 0.7
                            }
                        }
                    }}
                />
                <Button
                    type="submit"
                    variant="contained"
                    sx={{
                        background: 'linear-gradient(135deg, var(--primary), var(--accent))',
                        color: 'white',
                        px: 3,
                        py: 1.5,
                        borderRadius: 0,
                        fontWeight: 600,
                        textTransform: 'none',
                        fontSize: '1rem',
                        '&:hover': {
                            background: 'linear-gradient(135deg, var(--accent), var(--primary))',
                            transform: 'translateY(-1px)',
                        },
                        transition: 'all 0.3s ease',
                        minWidth: 120
                    }}
                >
                    Search
                </Button>
            </Paper>
        </Box>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);