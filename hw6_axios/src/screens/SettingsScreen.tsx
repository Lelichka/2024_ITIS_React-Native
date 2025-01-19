import {Button, StyleSheet, View} from 'react-native';
import {useTheme} from '../modules/theme/hooks/useTheme.ts';
import {IColors, ThemeTypes} from '../modules/theme/ThemeTypes.ts';

export const SettingsScreen = () => {
    const {Colors, changeTheme} = useTheme();
    const styles = useStyles(Colors);
    const themes = Object.values(ThemeTypes);
    return (<View style={styles.content}>
        <View style={{flexDirection: 'row', gap: 10}}>
            {themes.map(theme => <Button key={theme} onPress={() => changeTheme(theme)} title={theme}
                                         color={Colors.accentDefault}></Button>)}
        </View>
    </View>);
};

const useStyles = (colors: IColors) =>
    StyleSheet.create({
        content: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.backgroundPrimary,
        },
    });
