import {GestureResponderEvent, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useTheme} from '../modules/theme/hooks/useTheme.ts';
import {IColors, ThemeTypes} from '../modules/theme/ThemeTypes.ts';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

export const SettingsScreen = () => {
    const {Colors, changeTheme} = useTheme();
    const styles = useStyles(Colors);
    const themes = Object.values(ThemeTypes);
    return (<View style={styles.content}>
        <Text style={styles.text}>Select the color theme of the application:</Text>
        <View style={styles.buttonsView}>
            {themes.map(theme => <ThemeButton key={theme} theme={theme} onPress={() => changeTheme(theme)}/>)}
        </View>
    </View>);
};
export const ThemeButton = ({theme, onPress}: {
    theme: ThemeTypes,
    onPress: (event: GestureResponderEvent) => void
}) => {
    const {Colors} = useTheme();
    const styles = useStyles(Colors);
    const getButtonIcon = (themeName: ThemeTypes): string => {
        switch (themeName) {
            case ThemeTypes.LIGHT:
                return 'sunny-outline';
            case ThemeTypes.DARK:
                return 'moon-outline';
            case ThemeTypes.SYSTEM:
                return 'laptop-outline';
            case ThemeTypes.CUSTOM:
                return 'brush-outline';
            default:
                return 'brush-outline';
        }

    };
    return (
        <TouchableOpacity style={styles.themeButton} onPress={onPress}>
            <View style={styles.textButtonView}>
                <Text style={styles.textButton}>{theme.toString()}</Text>
                <Icon name={getButtonIcon(theme)} size={26} color={Colors.textPrimary}/>
            </View>
        </TouchableOpacity>
    );
};


const useStyles = (colors: IColors) =>
    StyleSheet.create({
        content: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.backgroundPrimary,
        },
        textButtonView: {flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', gap: 10},
        buttonsView: {flexDirection: 'column', gap: 10, marginTop: 20},
        themeButton: {
            backgroundColor: colors.accentDefault,
            padding: 10,
            borderRadius: 5,
        },
        text: {fontFamily: 'Unkempt-Bold', fontSize: 24, color: colors.textPrimary, textAlign: 'center'},
        textButton: {fontFamily: 'Unkempt-Regular', fontSize: 24, color: colors.textPrimary, textAlign: 'center'},
    });
