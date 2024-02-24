import { View, StyleSheet } from "react-native";

export function Footer(props) {
    const date = new Date();
    const year = date.getFullYear();
    const companyName = "DeGsoft";
    const copyright = `${companyName} © ${year}`;
    const zelda = "https://github.com/DeGsoft";

    return (<View style={props?.styles}>
        <footer>
            <a style={styles.a} href={zelda}>{ copyright }</a>
        </footer>
        </View>);
}

const styles = StyleSheet.create({
    a:{
        textDecorationLine: 'none',
        color: "white",
        fontWeight: "bold",
      },
    });