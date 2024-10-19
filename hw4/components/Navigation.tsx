import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, StyleSheet, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import NewsScreen from "./NewsScreen";
import ChatScreen from "./ChatScreen";
import SettingsScreen from "./SettingsScreen";
import HomeScreen from "./HomeScreen";
import AboutAppScreen from "./AboutApp";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="HomeStack" component={HomeStack} options={{
                title:'Home',
                headerShown: false,
                tabBarIcon: (props) => <Icon name='home-outline' size={25} color={props.color} />
            }} />
            <Tab.Screen name="News" component={NewsScreen} options={{
                headerLeft: () => <Text style={styles.title}>News</Text>,
                headerTitleAlign: 'center',
                headerTitle: () => <Icon name='newspaper' size={30} color={'black'} />,
                tabBarIcon: (props) => <Icon name='newspaper-outline' size={25} color={props.color} />
            }} />
            <Tab.Screen name="Chat" component={ChatScreen} options={{
                headerLeft: () => <Text style={styles.title}>Chat</Text>,
                headerTitleAlign: 'center',
                headerTitle: () => <Icon name='chatbubbles' size={30} color={'black'} />,
                tabBarIcon: (props) => <Icon name='chatbubbles-outline' size={25} color={props.color} />
            }} />
            <Tab.Screen name="Settings" component={SettingsScreen} options={{
                headerLeft: () => <Text style={styles.title}>Settings</Text>,
                headerTitleAlign: 'center',
                headerTitle: () => <Icon name='settings' size={30} color={'black'} />,
                tabBarIcon: (props) => <Icon name='settings-outline' size={25} color={props.color} />
            }} />
        </Tab.Navigator>
    )
}
export default TabNavigation;

const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={({ navigation }) => ({
                headerLeft: () => <Text style={styles.homeTitle}>Home</Text>,
                headerTitleAlign: 'center',
                headerTitle: () => <Icon name='home' size={30} color={'black'} />,
                headerRight: () => <Button
                    title="About App"
                    onPress={() => {
                        navigation.navigate('AboutApp');
                    }}
                />,
            })} />
            <Stack.Screen name="AboutApp" component={AboutAppScreen} />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
    homeTitle: { fontWeight: '500', fontSize: 20, color: 'black' },
    title: { marginLeft: 20, color: 'black', fontSize: 20, fontWeight: '500' },
});