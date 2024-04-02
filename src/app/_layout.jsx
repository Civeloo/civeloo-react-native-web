import { Slot } from 'expo-router';
import Nav from '../components/nav/nav';
import { StyleSheet, View } from 'react-native';
import { Footer, Intro } from '../components';

export default function Layout() {
    return (
        <View style={styles.layout}>
            <Nav />
            <View style={styles.introContainer}>
                <Intro />
            </View>
            <View style={{ paddingHorizontal: 20, }}>
                <Slot />
            </View>
            <Footer  />
        </View>
    );
}

const styles = StyleSheet.create({
    layout: {
        backgroundColor: 'black',
        width: '100%',
        height: '100%',

        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
    },
    introContainer: {
        position: 'absolute',     
    },
});