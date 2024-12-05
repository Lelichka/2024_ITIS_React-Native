import React, {useEffect} from 'react';
import {useRootStore} from '../hooks/useRootStore.ts';
import {ActivityIndicator, Animated, SafeAreaView, Text, TouchableOpacity} from 'react-native';
import ScrollView = Animated.ScrollView;
import {observer} from 'mobx-react';
import {styles} from '../styles.ts';
import {CharacterCard} from '../componets/CharacterCard.tsx';

export const HomeScreen = observer(
    () => {
        const {characterStore} = useRootStore();
        useEffect(() => {
            characterStore.getAllCharacters();
        }, [characterStore]);
        return (
            <SafeAreaView style={styles.safeAreaView}>
                {!characterStore.isLoading ? (characterStore.characters && characterStore.characters.length > 0 ?
                    <ScrollView>
                        {characterStore.characters!.map((item, i) => {
                                return (
                                    <CharacterCard key={`item_${i}`}
                                                   id={item.id}
                                                   name={item.name}
                                                   species={item.species}
                                                   gender={item.gender}
                                                   house={item.house}
                                                   dateOfBirth={item.dateOfBirth}
                                                   ancestry={item.ancestry}
                                                   wand={item.wand}
                                                   image={item.image}/>);
                            }
                        )
                        }</ScrollView> :
                    <TouchableOpacity style={styles.homePageButton}
                                      onPress={characterStore.getAllCharacters}><Text style={{color: '#FFDB58'}}>Try to
                        load characters</Text></TouchableOpacity>) : (
                    <ActivityIndicator size={'large'}/>
                )}
                <TouchableOpacity style={styles.homePageButton}
                                  onPress={characterStore.removeCharactersFromLocalStorage}><Text
                    style={{color: 'white'}}>Clear local storage</Text></TouchableOpacity>
            </SafeAreaView>
        );
    }
);



