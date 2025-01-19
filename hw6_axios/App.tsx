import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from './src/modules/theme/ThemeProvider.tsx';
import {observer} from 'mobx-react';
import {TabNavigation} from './src/navigation/TabNavigation.tsx';

const App = observer(() => {

    return (
        <ThemeProvider>
            <NavigationContainer>
                <TabNavigation/>
            </NavigationContainer>
        </ThemeProvider>
    );
});
export default App;
