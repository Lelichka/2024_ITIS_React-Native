import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create(
    {
        safeAreaView: {
            padding: 10,
            backgroundColor: '#62639B',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },
        card: {
            padding: 10,
            borderWidth: 1,
            borderRadius: 5,
            marginBottom: 20,
            alignItems: 'center',
            backgroundColor: '#8b8cb6',
        },
        cardTitle: {
            fontFamily: 'AnimalesFantastic-lGly',
            color: 'white',
            fontSize: 28,
            marginBottom: 10,
        },
        characterInfo: {flexDirection: 'row', justifyContent: 'space-between'},
        infoText: {color: 'white'},
        cardImage: {width: 190, height: 240, resizeMode: 'contain'},

        headerStyle: {backgroundColor: '#1A153F'},
        headerTitleStyle: {
            fontFamily: 'HarryP-MVZ6w',
            fontSize: 42,
            color: '#FFDB58',
        },
        homePageButton: {padding: 10, margin: 5, backgroundColor: '#1A153F'},
    }
);
