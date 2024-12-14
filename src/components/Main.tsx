import React from 'react';
import Constants from 'expo-constants';
import { StyleSheet, ScrollView, View, Image } from 'react-native';
import HelloWorld from '../modules/HelloWorld';
import RepositoryList from './RepositoryList';
import { ToggleTheme } from './ToggleTheme';


const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight,
        flexGrow: 1,
        flexShrink: 1,
        gap: 10,
        height: 'auto',
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
})

function Main() {
    return (
        <ScrollView
            style={styles.container}
        >
            <View style={styles.header}>
                <Image
                    style={styles.tinyLogo}
                    source={{
                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                    }}
                />
                <ToggleTheme />
            </View>
            <HelloWorld name="World" description="This is a description" />
            <RepositoryList />
        </ScrollView>
    )
}

export default Main