import { Formik } from 'formik';
import React from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export function ContactForm() {

    return (<View style={styles.container}>
        <Formik
            initialValues={{ email: '' }}
            onSubmit={values => console.log(values)}
        >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View style={styles.form}>
                    <Text style={styles.label}>
                        Email:
                    </Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                    />
                    <Text style={styles.label}>
                        Message:
                    </Text>
                    <TextInput
                        multiline
                        style={styles.textArea}
                        onChangeText={handleChange('message')}
                        onBlur={handleBlur('message')}
                        value={values.message}
                    />
                    <Pressable
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
    label: {
        marginBottom: 10,
        fontSize: 16,
        color: 'white',
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
