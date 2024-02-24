import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Header, Main, Footer, Intro } from "./src/components";

export default function App() {

  return (
    <View style={styles.container}>
      <Header styles={styles.mb}/>
      <Intro styles={styles.mb}/>
      <Main styles={styles.mb}/>
      <Footer styles={styles.mb}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(16, 16, 16)",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontFamily: "sans-serif",
  },
  mb:{
    marginBottom: 50
  },
});
