import { FlatList, View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
    separator: {
        height: 10,
    },
    listItem: {
        padding: 10,
        color: '#fff',
        backgroundColor: '#3b5998',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        borderRadius: 5,
        borderColor: '#fff',
    },
    list: {
        backgroundColor: '#090b11',
        color: '#fff',
    }
})

const ItemSeparator = () => <View style={styles.separator} />

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
    return (
        <FlatList
            data={repositories}
            ItemSeparatorComponent={ItemSeparator}
            renderItem={({ item }) => (
                <View 
                    style={styles.listItem}
                >
                    <Text
                        style={{
                            color: '#fff',
                        }}
                    >{item.fullName}</Text>
                    <Text
                        style={{
                            color: '#fff',
                        }}
                    >{item.description}</Text>
                    <Text
                        style={{
                            color: '#fff',
                        }}
                    >{item.language}</Text>
                    <Text
                        style={{
                            color: '#fff',
                        }}
                    >{item.forksCount}</Text>
                    <Text
                        style={{
                            color: '#fff',
                        }}
                    >{item.stargazersCount}</Text>
                    <Text
                        style={{
                            color: '#fff',
                        }}
                    >{item.ratingAverage}</Text>
                    <Text
                        style={{
                            color: '#fff',
                        }}
                    >{item.reviewCount}</Text>
                </View>
            )}
        />
    )
}

export default RepositoryList