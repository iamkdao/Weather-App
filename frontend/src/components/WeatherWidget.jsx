import React, { useEffect } from 'react';
import { mapStateToProps, mapDispatchToProps } from './connectors/weatherConnectors';
import { connect } from 'react-redux';
import {
    Box,
    Card,
    CardContent,
    Typography,
    IconButton,
    Grid,
    Chip,
    Divider,
    Tooltip
} from '@mui/material';
import {
    Refresh as RefreshIcon,
    Thermostat as ThermostatIcon,
    Air as AirIcon,
    Opacity as HumidityIcon,
    Schedule as TimeIcon,
    LocationOn as LocationIcon
} from '@mui/icons-material';
import LoadingSpinner from './LoadingSpinner';

function WeatherWidget({ data, loading, error, city, setCity, distance, setDistance, score, fetchWeather, setScore }) {
    useEffect(() => {
        if (data && city) {
            setDistance({ city1: data.name, city2: city })
        }
    }, [data, city, setDistance])

    const handleFetch = (e) => {
        e.preventDefault();
        setCity('');
        setScore(null);
        fetchWeather();
    }

    const formatTimezone = (timezone) => {
        const hours = timezone / 3600;
        const sign = hours >= 0 ? '+' : '';
        return `UTC${sign}${hours}`;
    };

    const getWeatherIcon = (description) => {
        const desc = description?.toLowerCase();
        if (desc?.includes('clear')) return '☀️';
        if (desc?.includes('cloud')) return '☁️';
        if (desc?.includes('rain')) return '🌧️';
        if (desc?.includes('snow')) return '❄️';
        if (desc?.includes('thunder')) return '⛈️';
        if (desc?.includes('fog') || desc?.includes('mist')) return '🌫️';
        return '🌤️';
    };

    if (loading) {
        return (
            <Box sx={{ maxWidth: 600, mx: 'auto', mt: 4, p: 2 }}>
                <Card className="fade-in" sx={{
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderRadius: 3
                }}>
                    <CardContent>
                        <LoadingSpinner message="Fetching weather data..." />
                    </CardContent>
                </Card>
            </Box>
        );
    }

    if (error) {
        return (
            <Box sx={{ maxWidth: 600, mx: 'auto', mt: 4, p: 2 }}>
                <Card className="fade-in" sx={{
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderRadius: 3
                }}>
                    <CardContent sx={{ textAlign: 'center', py: 4 }}>
                        <Typography variant="h6" sx={{ color: 'var(--danger)', mb: 2 }}>
                            ⚠️ Error Loading Weather Data
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'var(--muted)' }}>
                            {error}
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        );
    }

    console.log(data?.name)


    return (
        <Box className="fade-in" sx={{ maxWidth: 900, mx: 'auto', mt: 4, p: 2 }}>
            <Card sx={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 3,
                overflow: 'hidden',
                position: 'relative'
            }}>
                <Box sx={{
                    background: 'linear-gradient(135deg, var(--primary), var(--accent))',
                    p: 3,
                    color: 'white',
                    textAlign: 'center'
                }}>
                    <Typography variant="h4" component="h2" sx={{ fontWeight: 700, mb: 1 }}>
                        🌍 Weather Guessing Game
                    </Typography>
                    <Typography variant="body1" sx={{ opacity: 0.9 }}>
                        Can you guess the weather conditions?
                    </Typography>
                </Box>

                <CardContent sx={{ p: 4 }}>
                    {data ? (
                        <Box>
                            {/* Location and Timezone */}
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
                                <Chip
                                    icon={<TimeIcon />}
                                    label={formatTimezone(data.timezone)}
                                    sx={{
                                        background: 'var(--surface1)',
                                        color: 'var(--foreground)',
                                        border: '1px solid var(--border)'
                                    }}
                                />
                            </Box>

                            {/* Main Weather Info */}
                            <Grid container spacing={4} sx={{ mb: 3 }}>
                                <Grid item xs={12} md={6}>
                                    <Box sx={{
                                        background: 'linear-gradient(135deg, var(--surface1), var(--surface2))',
                                        p: 3,
                                        borderRadius: 2,
                                        textAlign: 'center',
                                        border: '1px solid var(--border)'
                                    }}>
                                        <Typography variant="h2" sx={{
                                            fontWeight: 700,
                                            background: 'linear-gradient(135deg, var(--primary), var(--accent))',
                                            backgroundClip: 'text',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                            mb: 1
                                        }}>
                                            {getWeatherIcon(data.weather[0].description)} {Math.round(data.main.temp)}°C
                                        </Typography>
                                        <Typography variant="h6" sx={{ color: 'var(--muted)', textTransform: 'capitalize' }}>
                                            {data.weather[0].description}
                                        </Typography>
                                    </Box>
                                </Grid>

                                <Grid item xs={12} md={6}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={6}>
                                            <Box sx={{
                                                background: 'var(--surface1)',
                                                p: 2,
                                                borderRadius: 2,
                                                textAlign: 'center',
                                                border: '1px solid var(--border)'
                                            }}>
                                                <AirIcon sx={{ color: 'var(--blue)', fontSize: 32, mb: 1 }} />
                                                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                                    {data.wind.speed} m/s
                                                </Typography>
                                                <Typography variant="body2" sx={{ color: 'var(--muted)' }}>
                                                    Wind Speed
                                                </Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Box sx={{
                                                background: 'var(--surface1)',
                                                p: 2,
                                                borderRadius: 2,
                                                textAlign: 'center',
                                                border: '1px solid var(--border)'
                                            }}>
                                                <HumidityIcon sx={{ color: 'var(--teal)', fontSize: 32, mb: 1 }} />
                                                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                                    {data.main.humidity}%
                                                </Typography>
                                                <Typography variant="body2" sx={{ color: 'var(--muted)' }}>
                                                    Humidity
                                                </Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Box sx={{
                                                background: 'var(--surface1)',
                                                p: 2,
                                                borderRadius: 2,
                                                textAlign: 'center',
                                                border: '1px solid var(--border)'
                                            }}>
                                                <ThermostatIcon sx={{ color: 'var(--peach)', fontSize: 32, mb: 1 }} />
                                                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                                    {Math.round(data.main.feels_like)}°C
                                                </Typography>
                                                <Typography variant="body2" sx={{ color: 'var(--muted)' }}>
                                                    Feels Like
                                                </Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Box sx={{
                                                background: 'var(--surface1)',
                                                p: 2,
                                                borderRadius: 2,
                                                textAlign: 'center',
                                                border: '1px solid var(--border)'
                                            }}>
                                                <Typography variant="h6" sx={{ fontWeight: 600, color: 'var(--green)' }}>
                                                    {Math.round(data.main.pressure)} hPa
                                                </Typography>
                                                <Typography variant="body2" sx={{ color: 'var(--muted)' }}>
                                                    Pressure
                                                </Typography>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>

                            {/* Score Display */}
                            {score && (
                                <Box sx={{
                                    background: 'linear-gradient(135deg, var(--success), var(--green))',
                                    p: 3,
                                    borderRadius: 2,
                                    textAlign: 'center',
                                    color: 'white',
                                    mb: 3
                                }}>
                                    <Typography variant="h5" sx={{ fontWeight: 700 }}>
                                        🎯 Your Score: {score}
                                    </Typography>
                                </Box>
                            )}

                            <Divider sx={{ my: 3 }} />

                            {/* Action Button */}
                            <Box sx={{ textAlign: 'center' }}>
                                <Tooltip title="Get new weather data">
                                    <IconButton
                                        onClick={handleFetch}
                                        sx={{
                                            background: 'linear-gradient(135deg, var(--primary), var(--accent))',
                                            color: 'white',
                                            p: 2,
                                            '&:hover': {
                                                transform: 'scale(1.05)',
                                                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                                            },
                                            transition: 'all 0.3s ease'
                                        }}
                                    >
                                        <RefreshIcon sx={{ fontSize: 28 }} />
                                    </IconButton>
                                </Tooltip>
                                <Typography variant="body2" sx={{ color: 'var(--muted)', mt: 1 }}>
                                    Click to get new weather data
                                </Typography>
                            </Box>
                        </Box>
                    ) : (
                        <Box sx={{ textAlign: 'center', py: 4 }}>
                            <Typography variant="h6" sx={{ color: 'var(--muted)', mb: 2 }}>
                                No weather data available
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'var(--muted)' }}>
                                Click the refresh button to start the game
                            </Typography>

                            <Tooltip title="Get new weather data">
                                <IconButton
                                    onClick={handleFetch}
                                    sx={{
                                        background: 'linear-gradient(135deg, var(--primary), var(--accent))',
                                        color: 'white',
                                        p: 2,
                                        '&:hover': {
                                            transform: 'scale(1.05)',
                                            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                                        },
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    <RefreshIcon sx={{ fontSize: 28 }} />
                                </IconButton>
                            </Tooltip>
                        </Box>
                    )}
                </CardContent>
            </Card>
        </Box>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherWidget);
