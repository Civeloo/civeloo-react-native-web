import Head from 'expo-router/head';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function PrivacyPolicy() {
  return (<>
    <Head>
      <title>Civeloo Privacy Policy</title>
      <meta name="description" content="Civeloo Privacy Policy." />
    </Head>
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.heading1}>Civeloo Privacy Policy</Text>

        <Text style={styles.heading2}>1. Introduction</Text>
        <Text style={styles.text}>
          At Civeloo, we take the privacy and protection of our customers' and users' personal data very seriously. This Privacy Policy describes how we collect, use, share, and protect the personal information we obtain through our business interactions and our website.
        </Text>

        <Text style={styles.heading2}>2. Information We Collect</Text>
        <Text style={styles.heading3}>a. Contact Information</Text>
        <Text style={styles.text}>
          We collect data such as name, email address, phone number, and physical address when you subscribe to our services, request information, or contact us.
        </Text>

        <Text style={styles.heading3}>b. Technical Information</Text>
        <Text style={styles.text}>
          We collect information related to your use of our services, including IP addresses, browser type, Internet service provider (ISP), referring/exit pages, operating system, date/time stamps, and browsing data.
        </Text>

        <Text style={styles.heading3}>c. Financial Information</Text>
        <Text style={styles.text}>
          If you make a purchase or contract services, we collect billing and payment information.
        </Text>

        <Text style={styles.heading2}>3. Use of Information</Text>
        <Text style={styles.text}>We use the information collected to:</Text>
        <Text style={styles.text}>• Provide and manage our services.</Text>
        <Text style={styles.text}>• Personalize and improve the user experience.</Text>
        <Text style={styles.text}>• Send promotional and marketing communications, provided we have your consent.</Text>
        <Text style={styles.text}>• Respond to your questions and customer service requests.</Text>
        <Text style={styles.text}>• Conduct analysis and studies to improve our products and services.</Text>
        <Text style={styles.text}>• Comply with legal and regulatory obligations.</Text>

        <Text style={styles.heading2}>4. Sharing Information</Text>
        <Text style={styles.text}>
          We do not sell or rent your personal information to third parties. We may share your information with:
        </Text>
        <Text style={styles.text}>• Service providers who work on our behalf to help us operate our business (e.g., hosting services, marketing, and technical support).</Text>
        <Text style={styles.text}>• Legal and regulatory authorities as required to comply with the law or to protect our rights and safety.</Text>

        <Text style={styles.heading2}>5. Information Security</Text>
        <Text style={styles.text}>
          We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is completely secure, so we cannot guarantee its absolute security.
        </Text>

        <Text style={styles.heading2}>6. Data Retention</Text>
        <Text style={styles.text}>
          We retain your personal information only for as long as necessary to fulfill the purposes described in this Privacy Policy, unless a longer retention period is required or permitted by law.
        </Text>

        <Text style={styles.heading2}>7. User Rights</Text>
        <Text style={styles.text}>
          You have the right to access, correct, update, or request the deletion of your personal information. To exercise these rights, please contact us through the means provided in this policy.
        </Text>

        <Text style={styles.heading2}>8. Changes to the Privacy Policy</Text>
        <Text style={styles.text}>
          We may update this Privacy Policy from time to time. We will post any changes on this page and, if the changes are significant, we will provide a more prominent notice.
        </Text>

        <Text style={styles.heading2}>9. Contact</Text>
        <Text style={styles.text}>
          If you have any questions or concerns about this Privacy Policy, please contact us at:
        </Text>
        <Text style={styles.text}>
          Email: info@civeloo.com{'\n'}
        </Text>
        <Text style={styles.text}>
          Effective Date: January 1, 2024
        </Text>
      </View>
    </ScrollView>
  </>);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#f4f4f4',
    padding: 20,
    marginBottom: 10
  },
  section: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  heading1: {
    fontSize: 24,
    color: '#0056b3',
    marginBottom: 10,
  },
  heading2: {
    fontSize: 20,
    color: '#0056b3',
    marginTop: 20,
    marginBottom: 10,
  },
  heading3: {
    fontSize: 18,
    color: '#0056b3',
    marginTop: 10,
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
  },
  bold: {
    fontWeight: 'bold',
  },
});