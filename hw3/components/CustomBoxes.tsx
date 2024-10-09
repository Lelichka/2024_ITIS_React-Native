import React, { useState } from 'react';
import { Button, NativeSyntheticEvent, StyleSheet, Text, TextInput, TextInputSubmitEditingEventData, TouchableOpacity, View } from 'react-native';
import { Int32 } from 'react-native/Libraries/Types/CodegenTypes';

const CustomBoxes = () => {
    const [boxProps, setBoxProps] = useState({ width: 100, height: 100, color: '#FA8072' });
    const [boxes, setBoxes] = useState<{
        width: Int32;
        height: Int32;
        color: string;
    }[]>([]);

    const onSubmitWidth = (value: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => {
        let width = value.nativeEvent.text;
        width ? setBoxProps({ ...boxProps, width: parseInt(value.nativeEvent.text) }) : setBoxProps({ ...boxProps, width: 100 })
    }
    const onSubmitHeight = (value: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => {
        let height = value.nativeEvent.text;
        height ? setBoxProps({ ...boxProps, height: parseInt(value.nativeEvent.text) }) : setBoxProps({ ...boxProps, height: 100 })
    }
    const onChangeColor = (color: string) => {
        setBoxProps({ ...boxProps, color: color })
    }
    const addBox = () => {
        setBoxes([...boxes, { ...boxProps }])
    }
    const clearBoxes = () => {
        setBoxes([])
    }

    return (
        <View style={styles.customBoxesSection}>
            <Box width={boxProps.width} height={boxProps.height} color={boxProps.color} />
            <View style={styles.editingBoxContainer}>
                <View style={styles.inputSizeContainer}>
                    <Text>Width</Text>
                    <TextInput onSubmitEditing={onSubmitWidth} keyboardType='numeric' style={styles.textInput} />
                </View>
                <View style={styles.inputSizeContainer}>
                    <Text>Height</Text>
                    <TextInput onSubmitEditing={onSubmitHeight} keyboardType='numeric' style={styles.textInput} />
                </View>
                <View style={styles.editingColorContainer}>
                    <Text>Color</Text>
                    <TouchableOpacity onPress={() => onChangeColor('#FA8072')} style={[styles.inputColor, { backgroundColor: '#FA8072' }]} />
                    <TouchableOpacity onPress={() => onChangeColor('#98FB98')} style={[styles.inputColor, { backgroundColor: '#98FB98' }]} />
                    <TouchableOpacity onPress={() => onChangeColor('#87CEEB')} style={[styles.inputColor, { backgroundColor: '#87CEEB' }]} />
                </View>
                <View style={styles.buttonsContainer}>
                    <Button
                        title='Add'
                        onPress={addBox}
                    />
                    <Button
                        title='Clear'
                        onPress={clearBoxes}
                    />
                </View>
                <View style={styles.boxesContainer}>
                    {boxes.map((box, index) => (<Box key={index} width={box.width} height={box.height} color={box.color} />))}
                </View>
            </View>
        </View>
    );
}
export default CustomBoxes;

export const Box = (props: { color: string, width: Int32, height: Int32 }) => {
    return (
        <View style={{
            width: props.width, height: props.height, backgroundColor: props.color
        }} />);
};
const styles = StyleSheet.create({
    customBoxesSection: { flex: 1, alignItems: 'center' },
    editingBoxContainer: { width: '100%', alignItems: 'flex-start', marginTop: 20 },
    textInput: { padding: 8, backgroundColor: '#f5f5f5', borderWidth: 1, borderColor: '#808080', width: '40%' },
    inputSizeContainer: { flexDirection: 'row', alignItems: 'center', columnGap: 20, marginHorizontal: 20, marginVertical: 5 },
    editingColorContainer: { flexDirection: 'row', alignItems: 'center', margin: 10, columnGap: 10 },
    inputColor: { width: 100, height: 70 },
    buttonsContainer: { flexDirection: 'row', columnGap: 10, margin: 20 },
    boxesContainer: { width: '100%', alignItems: 'center', rowGap: 10 },
});