import Head from 'expo-router/head';
import { Platform, StatusBar } from 'react-native';
import Cookie from '../components/cookie/cookie.web';
import Home from '../components/home/home';

export default function Page() {
  return (<>
    <Head>
      <title>Civeloo - Software Factory</title>
      <meta name="description" content="Civeloo was created in 2002 and since then its activity has been focused on the IT sector. After more than 10 years of experience, we serve customers throughout the national territory, both SMEs and large companies." />
    </Head>
    <StatusBar style="auto" />
    <Home />
    {Platform.OS === 'web' && <Cookie />}
  </>);
}