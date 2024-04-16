import { Formik } from 'formik';
import React from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import * as Yup from 'yup';

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

    const handleSubmit = async (values) => {
        console.log(values);
    }

    return (<View style={styles.container}>

                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                        <View style={styles.form}>

                            <View style={styles.labelContainer}>
                                <Text style={styles.label}>
                                    Email:
                                </Text>
                                {errors.email && touched.email ? <Text style={styles.error}>{errors.email}</Text> : null}
                            </View>
                            <TextInput
                                style={styles.input}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                            />

                            <View style={styles.labelContainer}>
                                <Text style={styles.label}>
                                    Message:
                                </Text>
                                {errors.message && touched.message ? <Text style={styles.error}>{errors.message}</Text> : null}
                            </View>
                            <TextInput
                                multiline
                                style={styles.textArea}
                                onChangeText={handleChange('message')}
                                onBlur={handleBlur('message')}
                                value={values.message}
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
            form: {
                width: 300,
    },
            labelContainer: {
                flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 10,
    },
            label: {
                fontSize: 16,
            color: 'white',
    },
            error: {
                // textAlign: 'right',
                fontSize: 14,
            color: 'gray',
    },
            input: {
                height: 40,
            marginBottom: 20,
            paddingHorizontal: 10,
            backgroundColor: 'white',
            borderRadius: 5,
    },
            textArea: {
                height: 100,
            marginBottom: 20,
            padding: 10,
            backgroundColor: 'white',
            borderRadius: 5,
    },
            button: {
                height: 40,
            textAlign: 'center',
            lineHeight: 40,
            backgroundColor: 'gray',
            color: 'white',
            borderRadius: 5,
            fontSize: 16,
    },
});
