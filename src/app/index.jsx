import Head from 'expo-router/head';
import { StatusBar, StyleSheet, View } from 'react-native';
import { Footer, Header, Intro, Main } from '../components';

export default function Page() {
  return (<>
    <Head>
      <title>Civeloo - Software Factory</title>
      <meta name="description" content="Civeloo was created in 2002 and since then its activity has been focused on the IT sector. After more than 10 years of experience, we serve customers throughout the national territory, both SMEs and large companies." />
    </Head>
    <StatusBar style="auto" />
    <View style={styles.container}>
      <Header style={styles.mb} />
      <Main style={styles.mb} />      
    </View>
  </>);
}

const styles = StyleSheet.create({
  container: {
    display: 'grid',
    placeItems: 'center',
    height: '90vh',
    
    color: "white",
    fontFamily: "sans-serif",
  },
  mb: {
    marginBottom: 50,
  },
});