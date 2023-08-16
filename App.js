import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const title = "Welcome, to Civeloo!";
  const text = [
    `Hello, we are the team, a software factory specialized in providing digital tools for entrepreneurs and businesses.`,
    `We offer you the design and development of web, mobile and desktop applications, adapted to your needs and requirements.`,
    `We are aware of the costs involved in a project and we always offer the best quality/price ratio for our services and the technologies we use.`,
    `We can deliver your project on time.`,
  ];

  const P = () => text.map((t) => <Text>{t}</Text>);

  return (
    <View style={styles.container}>
      <h1>{title}</h1>
      <P/>
      {/* <Text>This site is being built...</Text> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: 600,
    margin: "auto",
  },
});
