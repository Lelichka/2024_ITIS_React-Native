import {Button, StyleSheet, Text, View} from 'react-native';
import {observer} from 'mobx-react';
import React from 'react';
import {useTheme} from '../modules/theme/hooks/useTheme.ts';
import {IColors} from '../modules/theme/ThemeTypes.ts';

export const MainScreen = observer(() => {
    const {Colors} = useTheme();
    const styles = useStyles(Colors);
    return (<View style={styles.content}>
        <Text style={styles.textPrimary}>TextPrimary</Text>
        <Text style={styles.textSecondary}>TextPrimary</Text>
        <Button title={'Accent color button'} color={Colors.accentDefault}/>
    </View>);
});

const useStyles = (colors: IColors) =>
    StyleSheet.create({
        content: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.backgroundPrimary,
        },
        textPrimary: {
            color: colors.textPrimary,
        },
        textSecondary: {
            color: colors.textSecondary,
        },
    });

