import { View } from "react-native";

export function Header(props) {
    const title = "Welcome, to Civeloo!";
    return (<View style={props?.style}>
        <header>
            <h1>{title}</h1>
        </header>
    </View>);
}