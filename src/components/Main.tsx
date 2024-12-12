import Constants from 'expo-constants';
import { Text, StyleSheet, View } from 'react-native';
import HelloWorld from '../modules/HelloWorld';
import RepositoryList from './RepositoryList';

const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight,
        flexGrow: 1,
        flexShrink: 1,
        gap: 10,
        height: 'auto',
    }
})

function Main() {
    return (
        <View
            style={styles.container}
        >
            <Text>Rate Repository Application</Text>
            <HelloWorld name="World" description="This is a description" />
            <RepositoryList />
        </View>
    )
}

export default Main