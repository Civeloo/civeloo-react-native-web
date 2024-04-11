import Head from 'expo-router/head';
import { StyleSheet, Text, View } from 'react-native';

export default function About() {
  return (<>
    <Head>
      <title>About Civeloo</title>
      <meta name="description" content="This is a software Factory." />
    </Head>
    <View style={styles.container}>
      <View style={styles.grid}>
        <View>
          <Text style={styles.text}>Civeloo was created in 2002 and since then its activity has been focused on the IT sector.</Text>
          <Text style={styles.text}>After more than 10 years of experience, we serve customers throughout the national territory, both SMEs and large companies.</Text>
          <Text style={styles.text}>The corporate culture is based on teamwork and a high level of demand, which leads us to be informed of the latest developments in the sector in order to offer the best solutions to what we consider the center of our business model: our customers.</Text>
        </View>
        <View>
          <Text style={styles.text}>We are able to carry out customized studies and give advice in order to achieve a more efficient IT park for our clients.</Text>
          <Text style={styles.text}>We are a technical company and we have specialists in each product, although each project involves several professionals who give the work a general vision, hence the great importance of teamwork.</Text>
          <Text style={styles.text}>With a great implication and considering the client as a member of the team we reach together the satisfaction of the finished work.</Text>
        </View>
      </View>
    </View>
  </>);
}

const styles = StyleSheet.create({
  container: {
    top: -20,
    display: 'grid',
    placeItems: 'center',
    height: '100vh',
    maxWidth: 1024,
    margin: 'auto',
  },
  grid: {
    display: 'grid',
    placeItems: 'center',
    gridTemplateColumns: 'repeat(auto-fill, minmax(460px, 1fr))',
    marginHorizontal: 20,
    gridGap: 20,
  },
  text: {
    fontSize: 20,
    color: 'white',
  },
});
