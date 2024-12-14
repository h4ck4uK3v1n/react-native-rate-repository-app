import React from 'react';
import { FlatList, View, StyleSheet, Text, Pressable } from 'react-native';
import { useTheme } from '@context/ThemeContext';
const useStyles = () => {
    const { theme } = useTheme();
    return StyleSheet.create({
        separator: {
            height: 10,
        },
        listItem: {
            padding: 10,
            color: theme.colors.gray0, // Texto principal
            backgroundColor: theme.colors.gray0, // Fondo principal actualizado
            shadowColor: theme.colors.accentLight, // Color de sombra (React Native usa shadowColor en lugar de boxShadow)
            shadowOffset: { width: 0, height: 2 }, // Offset de la sombra
            shadowOpacity: 0.8, // Opacidad de la sombra
            shadowRadius: 4, // Radio de la sombra
            elevation: 5, // Para sombras en Android
            borderRadius: 20,
            borderColor: theme.colors.accentDark, // Borde principal
            borderWidth: 1, // Ancho del borde
        },
        list: {
            backgroundColor: theme.colors.gray900, // Fondo informativo actualizado
            color: theme.colors.gray0, // Texto principal
            width: '100%',
            flex: 1,
            borderRadius: 20,
            padding: 10,
            rowGap: 50, // En React Native, "gap" no es compatible directamente; usa márgenes entre elementos secundarios.
        },
        headerList: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: theme.colors.gray0, // Texto principal
            backgroundColor: theme.colors.gray0, // Fondo de cabecera actualizado
            shadowColor: theme.colors.accentLight, // Color de sombra (React Native usa shadowColor en lugar de boxShadow)
            borderRadius: 20,
            padding: 10,
            marginBottom: 20,
        },
        button: {
            backgroundColor: theme.colors.accentLight,
            padding: 16,
            borderRadius: 8,
        },
        text: {
            color: theme.colors.gray900,
            fontFamily: theme.fonts.brand,
            fontSize: theme.fontSizes.base,
        },
        subList: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: theme.colors.gray0, // Texto principal
            backgroundColor: theme.colors.gray0, // Fondo secundario actualizado
            shadowColor: theme.colors.accentLight, // Color de sombra (React Native usa shadowColor en lugar de boxShadow)
            shadowOffset: { width: 0, height: 2 }, // Offset de la sombra
            shadowOpacity: 0.8, // Opacidad de la sombra
            shadowRadius: 4, // Radio de la sombra
            elevation: 5, // Para sombras en Android
            borderRadius: 20,
            borderColor: theme.colors.accentDark, // Borde secundario
            borderWidth: 1, // Ancho del borde
            padding: 10,
            marginTop: 10,
        }
    });
}


const ItemSeparator = () => {
    const styles = useStyles();
    return <View style={styles.separator} />;
}

const HeaderList = () => {
    const styles = useStyles();
    return (
        <View style={styles.headerList}>
            <Text style={styles.text}>
                Repository List
            </Text>
            <Pressable
                onPress={() => alert('Hello World!')}
                style={styles.button}>
                <Text style={{
                    color: '#fff',
                }}>Press me</Text>
            </Pressable>
        </View>
    )
}

interface RepositoryProps {
    id: string
    fullName: string
    description: string
    language: string
    forksCount: number
    stargazersCount: number
    ratingAverage: number
    reviewCount: number
    ownerAvatarUrl: string
}

const repositories = [
    {
        id: 'jaredpalmer.formik',
        fullName: 'jaredpalmer/formik',
        description: 'Build forms in React, without the tears',
        language: 'TypeScript',
        forksCount: 1589,
        stargazersCount: 21553,
        ratingAverage: 88,
        reviewCount: 4,
        ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/4060187?v=4',
    },
    {
        id: 'rails.rails',
        fullName: 'rails/rails',
        description: 'Ruby on Rails',
        language: 'Ruby',
        forksCount: 18349,
        stargazersCount: 45377,
        ratingAverage: 100,
        reviewCount: 2,
        ownerAvatarUrl: 'https://avatars1.githubusercontent.com/u/4223?v=4',
    },
    {
        id: 'django.django',
        fullName: 'django/django',
        description: 'The Web framework for perfectionists with deadlines.',
        language: 'Python',
        forksCount: 21015,
        stargazersCount: 48496,
        ratingAverage: 73,
        reviewCount: 5,
        ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/27804?v=4',
    },
    {
        id: 'reduxjs.redux',
        fullName: 'reduxjs/redux',
        description: 'Predictable state container for JavaScript apps',
        language: 'TypeScript',
        forksCount: 13902,
        stargazersCount: 52869,
        ratingAverage: 0,
        reviewCount: 0,
        ownerAvatarUrl: 'https://avatars3.githubusercontent.com/u/13142323?v=4',
    },
] as RepositoryProps[];

function RepositoryList() {
    const styles = useStyles();
    return (
        <FlatList
            style={styles.list}
            data={repositories}
            ItemSeparatorComponent={ItemSeparator}
            ListHeaderComponent={
                HeaderList
            }
            nestedScrollEnabled
            renderItem={({ item }) => (
                <View
                    style={styles.listItem}
                >
                    <Text style={styles.text}>{item.fullName}</Text>
                    <Text style={styles.text}>{item.description}</Text>
                    <Text style={styles.text}>{item.language}</Text>
                    <View style={styles.subList}>
                        <Text style={styles.text}>{item.forksCount}</Text>
                        <Text style={styles.text}>{item.stargazersCount}</Text>
                        <Text style={styles.text}>{item.ratingAverage}</Text>
                        <Text style={styles.text}>{item.reviewCount}</Text>
                    </View>
                </View>
            )}
        />
    )
}

export default RepositoryList