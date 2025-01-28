import {IColors, ThemeTypes} from '../ThemeTypes.ts';
import {GestureResponderEvent, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useTheme} from '../hooks/useTheme.ts';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';
import {useTranslation} from "react-i18next";

export const ThemeButton = ({theme, onPress}: {
    theme: ThemeTypes,
    onPress: (event: GestureResponderEvent) => void
}) => {
    const { t } = useTranslation(['settings']);
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
                <Text style={styles.textButton}>{t(`theme.${theme.toString()}`)}</Text>
                <Icon name={getButtonIcon(theme)} size={26} color={Colors.textPrimary}/>
            </View>
        </TouchableOpacity>
    );
};

const useStyles = (colors: IColors) =>
    StyleSheet.create({
        textButtonView: {flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', gap: 10},
        themeButton: {
            backgroundColor: colors.accentDefault,
            padding: 10,
            borderRadius: 5,
        },
        textButton: {fontFamily: 'ShantellSans-Regular', fontSize: 20, color: colors.textPrimary, textAlign: 'center'},
    });
