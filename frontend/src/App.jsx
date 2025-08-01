import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Box } from '@mui/material';
import Header from './components/Header';
import WeatherWidget from './components/WeatherWidget';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer';

function App() {
  const muiTheme = createTheme({
    palette: {
      mode: 'light', // This will be overridden by CSS custom properties
    },
    typography: {
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    },
  });

  return (
    <ThemeProvider>
      <MuiThemeProvider theme={muiTheme}>
        <CssBaseline />
        <Box className="App">
          <Header />
          <Box component="main" sx={{ flex: 1, py: 2 }}>
            <SearchBar />
            <WeatherWidget />
          </Box>
          <Footer />
        </Box>
      </MuiThemeProvider>
    </ThemeProvider>
  );
}

export default App;
