import { Ionicons } from "@expo/vector-icons";
import { Tabs } from 'expo-router/tabs';

export default function Nav() {
    return (<Tabs>
        <Tabs.Screen
            name="index"
            options={{
                headerShown: false,
                tabBarLabel: 'Home',
                tabBarIcon: ({ size, color }) => (
                    <Ionicons name="home" size={size} color={color} />
                )
            }}
        />
        <Tabs.Screen
            name="about"
            options={{
                headerShown: false,
                tabBarLabel: "About",
                tabBarIcon: ({ size, color }) => (
                    <Ionicons name="person" size={size} color={color} />
                )
            }}
        />
    </Tabs>);
}
