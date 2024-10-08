import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const TextInputSection = () => {

    const [name, setName] = useState('');
    const [submitedName, setSubmitedName] = useState('');

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isAuthorized, setIsAuthorized] = useState(false)
    const [error, setError] = useState('')

    const login = () => {
        if (email && password) {
            setIsAuthorized(true);
            setError('');
        }
        else {
            setError("Fill in the required fields")
        }
    }

    return (
        <View>
            <View style={styles.textInputSection}>
                <Text style={styles.text}>
                    {name ? `Current input: ${name}` : 'What is your name?'}
                </Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={text => setName(text)}
                />
                <Button title="Submit" onPress={() => setSubmitedName(name)}></Button>
                {submitedName ? <Text style={styles.text}>
                    {`Submited input: ${submitedName}`}
                </Text> : null}
            </View>
            <View style={styles.textInputSection}>
                {isAuthorized
                    ? <Text style={styles.header}>Welcome</Text>
                    : <>
                        <Text style={styles.header}> Authorization Form</Text>
                        <Text>Email</Text>
                        <TextInput onChangeText={(value) => setEmail(value)} placeholder="email" keyboardType='email-address' style={styles.textInput} />
                        <Text>Password</Text>
                        <TextInput onChangeText={(value) => setPassword(value)} placeholder="password" secureTextEntry={true} textContentType='password' style={styles.textInput} />
                        <Button title="Login" onPress={login} />
                    </>}
                {error ? <Text style={styles.error}>{error}</Text> : null}
            </View>
        </View>
    );
};

export default TextInputSection;

const styles = StyleSheet.create({
    textInputSection: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        padding: 16,
    },
    text: { marginVertical: 16 },
    textInput: { padding: 8, backgroundColor: '#f5f5f5', borderWidth: 1, borderColor: '#808080' },
    header: { fontSize: 20, color: 'black', marginVertical: 10},
    error: { color: 'red' }
});

