import { Slot } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import { Footer } from '../components';
import Nav from '../components/nav/nav';

export default function Layout() {
    return (
        <View style={styles.layout}>
            <Nav />
            <Slot />
            <Footer />
        </View>
    );
}

const styles = StyleSheet.create({
    layout: {
        backgroundColor: 'black',
        color: "white",
        fontFamily: "sans-serif",
    },
});