import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const DisabledButton = () => {

    const [pressedCount, setPressedCount] = useState(0);
    const handlePress = () => {
        setPressedCount(pressedCount + 1);
    };
    const handleReset = () => {
        setPressedCount(0);
    };

    return (
        <View style={styles.disabledButtonSection}>
            <Text style={styles.text}>
                {pressedCount > 0
                    ? `The button was pressed ${pressedCount} times!`
                    : 'The button isn\'t pressed yet'
                }
            </Text>
            <Button disabled={pressedCount > 3 ? true : false}
                title='Press me'
                onPress={handlePress}
            />
            <View style={styles.divider} />
            <Button
                title='Reset'
                onPress={handleReset}
            />
        </View>
    );
};

export default DisabledButton;

const styles = StyleSheet.create({
    disabledButtonSection: { flex: 1, justifyContent: 'center' },
    text: { margin: 16 },
    divider: { height: 15 },

});