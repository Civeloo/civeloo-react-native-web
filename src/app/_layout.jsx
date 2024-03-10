import { Tabs } from 'expo-router/tabs';
import { Platform, View } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { Link, Slot } from 'expo-router';

export default function Layout() {
    return (<>
        {Platform.OS === 'web' ?
            <div>
                <div>
                <Link href="/">Home</Link>
                |
                <Link href="/about">About</Link>
                </div>
                <Slot />
            </div>
            : <Tabs>
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
                            <Ionicons name="about" size={size} color={color} />
                        )
                    }}
                />
            </Tabs>}
    </>);
}
