import Head from 'expo-router/head';
import { View, Text, StyleSheet } from 'react-native';

export default function About() {
  return (<>
    <Head>
      <title>About Civeloo</title>
      <meta name="description" content="This is a software Factory." />
    </Head>
    <View style={styles.container}>
          <Text style={styles.text}>Civeloo was created in 2002 and since then its activity has been focused on the IT sector.</Text>
          <Text style={styles.text}>After more than 10 years of experience, we serve customers throughout the national territory, both SMEs and large companies.</Text>
          <Text style={styles.text}>The corporate culture is based on teamwork and a high level of demand, which leads us to be informed of the latest developments in the sector in order to offer the best solutions to what we consider the center of our business model: our customers.</Text>
          <Text style={styles.text}>We are able to carry out customized studies and give advice in order to achieve a more efficient IT park for our clients.</Text>
          <Text style={styles.text}>We are a technical company and we have specialists in each product, although each project involves several professionals who give the work a general vision, hence the great importance of teamwork.</Text>
          <Text style={styles.text}>With a great implication and considering the client as a member of the team we reach together the satisfaction of the finished work.</Text>
    </View>
  </>);
}

const styles = StyleSheet.create({
  container: {
    display: 'grid',
    placeItems: 'center',
    height: '100vh',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gridGap: 20,
  },
  text: {
    fontSize: 16,
    color: 'white',
  },
});
