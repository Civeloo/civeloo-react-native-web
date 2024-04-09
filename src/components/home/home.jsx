import { View } from "react-native";
import { Intro } from "../intro/intro";
import { Main } from "./main";

export default function Home() {
    return (<View>
        <main>
            <Intro />
            <Main />
        </main>
    </View>);
}