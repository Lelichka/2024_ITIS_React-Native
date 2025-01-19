import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {observer} from 'mobx-react';
import React from 'react';
import {useTheme} from '../modules/theme/hooks/useTheme.ts';
import {IColors} from '../modules/theme/ThemeTypes.ts';

export const MainScreen = observer(() => {
    const {Colors} = useTheme();
    const styles = useStyles(Colors);
    return (<View style={styles.content}>
        <Text style={styles.textPrimary}>Text Primary</Text>
        <Text style={styles.textSecondary}>Text Secondary</Text>
        <TouchableOpacity style={styles.button} ><Text style={styles.buttonText}>Accent color button</Text></TouchableOpacity>
    </View>);
});

const useStyles = (colors: IColors) =>
    StyleSheet.create({
        content: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.backgroundPrimary,
            gap: 10,
        },
        textPrimary: {
            color: colors.textPrimary,
            fontFamily: 'Unkempt-Bold',
            fontSize: 34,
        },
        textSecondary: {
            color: colors.textSecondary,
            fontFamily: 'Unkempt-Regular',
            fontSize: 24,
        },
        button: {
            backgroundColor: colors.accentDefault,
             padding: 10,
            borderRadius: 10
        },
        buttonText:{
            color: colors.textPrimary,
            fontFamily: 'Unkempt-Regular',
            fontSize: 24,
        }
    });

