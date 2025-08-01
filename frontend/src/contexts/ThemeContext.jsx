import React, { createContext, useContext, useState, useEffect } from 'react';
import { lightTheme, darkTheme } from '../themes';

const ThemeContext = createContext();

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const saved = localStorage.getItem('theme');
        return saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    const theme = isDarkMode ? darkTheme : lightTheme;

    useEffect(() => {
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');

        // Apply theme variables to CSS custom properties
        Object.entries(theme).forEach(([key, value]) => {
            if (typeof value === 'string') {
                document.documentElement.style.setProperty(`--${key}`, value);
            }
        });
    }, [isDarkMode, theme]);

    const toggleTheme = () => {
        setIsDarkMode(prev => !prev);
    };

    return (
        <ThemeContext.Provider value={{ theme, isDarkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}; 