import Head from 'expo-router/head';
import { ContactForm } from '../components';

export default function Contact() {
  return (<>
    <Head>
      <title>Contact Form - Civeloo</title>
      <meta name="description" content="Contact form of Civeloo." />
    </Head>
    <ContactForm />
  </>);
}