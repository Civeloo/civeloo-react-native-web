import { StyleSheet, Text, View } from "react-native";

export function Footer() {
    const date = new Date();
    const year = date.getFullYear();
    const companyName = "DeGsoft";
    const copyright = `${companyName} © ${year}`;
    const zelda = "https://github.com/DeGsoft";

    return (<View style={styles.container}>
        <footer>
            <Text style={styles.a} href={zelda}>{copyright}</Text>
        </footer>
    </View>);
}

const styles = StyleSheet.create({
    container: {
        top: -20,
        display: 'grid',
        placeItems: 'center',
    },
    a: {
        textDecorationLine: 'none',
        color: "white",
    },
});