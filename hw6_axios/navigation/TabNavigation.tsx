import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from '../screens/HomeScreen.tsx';
import React from 'react';
import {styles} from '../styles.ts';
import {SpellsScreen} from '../screens/SpellsScreen.tsx';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Characters" component={HomeScreen} options={{
                headerTitle: 'Harry Potter Characters',
                headerStyle: styles.headerStyle,
                headerTitleAlign: 'center',
                headerTitleStyle: styles.headerTitleStyle,
            }}/>
            <Tab.Screen name="Spells" component={SpellsScreen} options={{
                title: 'Spells',
                headerStyle: styles.headerStyle,
                headerTitleAlign: 'center',
                headerTitleStyle: styles.headerTitleStyle,
            }}/>
        </Tab.Navigator>
    );
};

export default TabNavigation;
