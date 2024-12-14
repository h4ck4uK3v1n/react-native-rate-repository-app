import React from 'react';
import { Button } from 'react-native';
import { useTheme } from '@context/ThemeContext';


export function ToggleTheme() {
    const { toggleTheme } = useTheme();
    return (
        <Button title="Cambiar tema" onPress={toggleTheme} />
    );
}