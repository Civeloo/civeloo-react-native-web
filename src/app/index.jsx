import Head from 'expo-router/head';
import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function Page() {
  return (<>
    <Head>
      <title>Civeloo - Software Factory</title>
      <meta name="description" content="Civeloo was created in 2002 and since then its activity has been focused on the IT sector. After more than 10 years of experience, we serve customers throughout the national territory, both SMEs and large companies." />
    </Head>
    {/* <View> */}
    <Text
      style={{ color: 'white' }}>
      Welcome to Civeloo!!!
    </Text>
    {/* </View> */}
  </>);
}
