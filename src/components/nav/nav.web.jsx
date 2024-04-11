import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";
import "./nav.web.css";

const NavLink = ({ href, text }) => {
    return (
        <Link href={href} asChild>
            <Pressable>
                <Text style={
                    {
                        $$css: true,
                        _: "nav-link",
                    }
                }>{text}</Text>
            </Pressable>
        </Link>
    );
}

const NavBar = () => {
    return (<View style={{
        $$css: true,
        _: "nav-bar",
    }} >
        <View style={{
            $$css: true,
            _: "nav-container",
        }}>
            <NavLink href="/" text="Home" />
            <View style={{
                $$css: true,
                _: "nav-button",
            }}>
                <NavLink href="/about" text="About" />
                <NavLink href="/contact" text="Contact" />
            </View>
        </View>
    </View>);
}
export default function Nav() {
    return (<>
        <NavBar />
    </>);
}
