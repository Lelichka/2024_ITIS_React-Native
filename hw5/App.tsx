import React from 'react';
import {
    View,
} from 'react-native';
import {HomeScreen} from './components/HomeScreen.tsx';
import {GestureHandlerRootView} from 'react-native-gesture-handler';


function App(): React.JSX.Element {
    return (
        <GestureHandlerRootView style={{flex: 1}}>
            <View><HomeScreen/></View>
        </GestureHandlerRootView>
    );
}


export default App;
