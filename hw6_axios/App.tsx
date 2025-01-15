import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigation from './navigation/TabNavigation.tsx';
import Navigation from './navigation/Navigation.tsx';
import {DeepLinking} from './navigation/DeepLinking.ts';
import {useEffect} from "react";
import {Linking} from "react-native";

const Stack = createNativeStackNavigator();


const App = () => {
    useEffect(() => {
        Linking.getInitialURL().then(async deepLinkInitialURL => {
            if (deepLinkInitialURL) {
                await DeepLinking.handleInitialNavigate(deepLinkInitialURL);
            }
        });
    }, []);
    return (
        <NavigationContainer linking={DeepLinking.linking} ref={Navigation.navigationRef}>
            <Stack.Navigator>
                <Stack.Screen name={'MainTab'} component={TabNavigation} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default App;
