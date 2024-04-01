import { Slot } from 'expo-router';
import Nav from '../components/nav/nav';
import { StyleSheet, View } from 'react-native';

export default function Layout() {
    return (
        <View style={styles.layout}>
            <Nav />
            <Slot />
        </View>
    );
}

const styles = StyleSheet.create({
    layout: {
        backgroundColor: 'black',
        height: '100%',
        width: '100%',
    },
});