import {MainScreen} from '../screens/MainScreen.tsx';
import {SettingsScreen} from '../screens/SettingsScreen.tsx';
import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTheme} from '../modules/theme/hooks/useTheme.ts';
import {IColors} from '../modules/theme/ThemeTypes.ts';
import {StyleSheet} from 'react-native';
import {observer} from "mobx-react";
const Tab = createBottomTabNavigator();

export const TabNavigation = observer(() => {

    const {Colors} = useTheme();
    const styles = useStyles(Colors);


    return (
        <Tab.Navigator>
            <Tab.Screen name={'main'} component={MainScreen} options={{
                headerStyle: styles.headerStyle,
                headerTitleStyle: styles.headerTitleStyle,
                tabBarStyle: styles.tabBarStyle,
                tabBarLabelStyle: styles.tabBarLabelStyle,
                tabBarActiveTintColor: Colors.accentDefault,
                tabBarInactiveTintColor: Colors.textPrimary,
            }
            }/>
            <Tab.Screen name={'settings'} component={SettingsScreen} options={{
                headerStyle: styles.headerStyle,
                headerTitleStyle: styles.headerTitleStyle,
                tabBarStyle: styles.tabBarStyle,
                tabBarLabelStyle: styles.tabBarLabelStyle,
                tabBarActiveTintColor: Colors.accentDefault,
                tabBarInactiveTintColor: Colors.textPrimary,
            }}/>
        </Tab.Navigator>
    );
});
const useStyles = (colors: IColors) =>
    StyleSheet.create({
        headerStyle: {
            backgroundColor: colors.backgroundSecondary,
        },
        headerTitleStyle: {
            color: colors.textPrimary,
        },
        tabBarStyle: {
            backgroundColor: colors.backgroundSecondary,
        },
        tabBarLabelStyle: {
            color: colors.textPrimary,
        },
    });
