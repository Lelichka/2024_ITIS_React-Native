import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const TextInputSection = () => {

    const [name, setName] = useState('');
    const [submitedName, setSubmitedName] = useState('');

    return (
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
            </Text> : <></>}
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
    textInput: { padding: 8, backgroundColor: '#f5f5f5', borderWidth: 1, borderColor: '#808080' }
});

