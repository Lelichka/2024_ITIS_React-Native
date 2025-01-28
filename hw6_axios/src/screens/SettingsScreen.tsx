import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useTheme} from '../modules/theme/hooks/useTheme.ts';
import {IColors, ThemeTypes} from '../modules/theme/ThemeTypes.ts';
import {ThemeButton} from '../modules/theme/components/ThemeButton.tsx';
import LangStore from '../modules/lang/LangStore.ts';
import {LangType} from '../modules/lang/LangType.ts';
import React from 'react';
import { useTranslation } from 'react-i18next';
import {observer} from 'mobx-react';

export const SettingsScreen = observer(() => {
    const langStore = new LangStore();
    const { t } = useTranslation(['settings']);
    const handleChangeLang = async () => {
        const lang = await langStore.getLang();
        await langStore.changeLang(LangType.RU === lang ? LangType.EN : LangType.RU);
    };
    const {Colors, changeTheme} = useTheme();
    const styles = useStyles(Colors);

    const themes = Object.values(ThemeTypes);
    return <View style={styles.content}>
        <TouchableOpacity style={styles.changeThemeButton} onPress={()=> handleChangeLang()}><Text style={styles.textButton}>{t('settings:change_lang')}</Text></TouchableOpacity>
        <Text style={styles.text}>{t('settings:text_change_theme')}</Text>
        <View style={styles.buttonsView}>
            {themes.map(theme => <ThemeButton key={theme} theme={theme} onPress={() => changeTheme(theme)}/>)}
        </View>
    </View>;
});

const useStyles = (colors: IColors) =>
    StyleSheet.create({
        content: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.backgroundPrimary,
        },
        changeThemeButton:{backgroundColor:colors.accentDefault, padding: 10, borderRadius: 10, marginBottom: 30},
        buttonsView: {flexDirection: 'column', gap: 10, marginTop: 20},
        text: {fontFamily: 'ShantellSans-Bold', fontSize: 24, color: colors.textPrimary, textAlign: 'center'},
        textButton: {fontFamily: 'ShantellSans-Medium', fontSize: 24, color: colors.textPrimary, textAlign: 'center'},
    });
