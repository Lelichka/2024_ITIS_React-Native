import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from './screens/HomeScreen.tsx';

const Stack = createNativeStackNavigator();
const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={'Home'} component={HomeScreen}
                              options={{
                                  title: 'Harry Potter Characters',
                                  headerStyle: {backgroundColor: '#1A153F'},
                                  headerTitleAlign: 'center',
                                  headerTitleStyle: {
                                      fontFamily: 'HarryP-MVZ6w',
                                      fontSize: 42,
                                      color: '#FFDB58',
                                  },
                              }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default App;
