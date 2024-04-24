import { Formik } from 'formik';
import React from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import * as Yup from 'yup';

const SEND_EMAIL = process.env.EXPO_PUBLIC_SEND_EMAIL;

export function ContactForm() {

    const initialValues = {
        email: '',
        message: '',
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Required'),
        message: Yup.string()
            .min(50, 'Too Short!')
            .max(150, 'Too Long!')
            .required('Required'),
    });

    const handleSubmit = (values, { resetForm }) => {
        resetForm();
        fetch(SEND_EMAIL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: values.email,
                email: values.email,
                details: values.message,
            }),
        }).then((res) => {
            if (res.status >= 400) {
                console.error('Message wasn\'t sent due to internal server error :-(')
            }
            else {
                console.log('Message sent successfully!')
            }
        }).catch((err) => {
            console.error('error: ', err)
        });
    };

    return (<View style={styles.container}>

        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ handleChange, handleBlur, handleSubmit, resetForm, values, errors, touched }) => (
                <View style={styles.form}>
                    <Text style={styles.title}>
                        Write Us
                    </Text>
                    <View style={styles.labelContainer}>
                        {errors.email && touched.email ? <Text style={styles.error}>{errors.email}</Text> : null}
                    </View>
                    <TextInput
                        style={styles.input}
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                        placeholder='Email'
                    />

                    <View style={styles.labelContainer}>
                        {errors.message && touched.message ? <Text style={styles.error}>{errors.message}</Text> : null}
                    </View>
                    <TextInput
                        multiline
                        style={styles.textArea}
                        onChangeText={handleChange('message')}
                        onBlur={handleBlur('message')}
                        value={values.message}
                        placeholder='Message'
                    />

                    <Pressable
                        style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
                        onPress={handleSubmit}>
                        <Text style={styles.button} onPress={handleSubmit}>
                            Submit
                        </Text>
                    </Pressable>
                </View>
            )}
        </Formik>
    </View>);
}

const styles = StyleSheet.create({
    container: {
        top: -20,
        display: 'grid',
        placeItems: 'center',
        height: '100vh',
        maxWidth: 1024,
        margin: 'auto',
        color: 'white',
    },
    title: {
        fontSize: 'x-large',
        marginBottom: 20,
        color: 'white',
        textAlign: 'center',
    },
    form: {
        width: 300,
    },
    labelContainer: {
        height: 20,
    },
    label: {
        fontSize: 16,
        color: 'white',
    },
    error: {
        textAlign: 'right',
        fontSize: 14,
        color: 'gray',
    },
    input: {
        height: 40,
        paddingHorizontal: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        color: 'gray',
        borderRadius: 5,
    },
    textArea: {
        height: 100,
        marginBottom: 20,
        padding: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        color: 'gray',
        borderRadius: 5,
    },
    button: {
        height: 40,
        textAlign: 'center',
        lineHeight: 40,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        color: 'gray',
        borderRadius: 5,
        fontSize: 16,
    },
});
