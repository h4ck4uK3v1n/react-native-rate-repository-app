import React from 'react';
import { StyleSheet, View } from 'react-native';
import Main from './src/components/Main';
import { useTheme, ThemeProvider } from '@context/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <Body />
    </ThemeProvider>
  );
}

function Body() {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <Main />
    </View>
  )

}

const useStyles = () => {
  const { theme } = useTheme();
  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.colors.background,
    },
    text: {
      color: theme.colors.gray200,
      fontFamily: theme.fonts.body,
      fontSize: theme.fontSizes.base,
    },
    heading: {
      color: theme.colors.accentRegular,
      fontFamily: theme.fonts.brand,
      fontSize: theme.fontSizes['4xl'],
    },
    button: {
      backgroundColor: theme.colors.accentRegular,
      padding: 16,
      borderRadius: 8,
    },
    buttonText: {
      color: theme.colors.gray0,
      fontSize: theme.fontSizes.md,
      textAlign: 'center',
    },
  });
}
