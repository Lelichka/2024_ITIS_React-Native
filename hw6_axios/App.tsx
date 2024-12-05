import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from './screens/HomeScreen.tsx';
import {styles} from "./styles.ts";

const Stack = createNativeStackNavigator();
const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={'Home'} component={HomeScreen}
                              options={{
                                  title: 'Harry Potter Characters',
                                  headerStyle: styles.headerStyle,
                                  headerTitleAlign: 'center',
                                  headerTitleStyle: styles.headerTitleStyle,
                              }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default App;
