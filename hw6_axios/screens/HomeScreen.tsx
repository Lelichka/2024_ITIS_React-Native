import React, {useEffect} from 'react';
import {useRootStore} from '../hooks/useRootStore.ts';
import {ActivityIndicator, Animated, SafeAreaView} from 'react-native';
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
                {characterStore.characters && !characterStore.isLoading ? (<ScrollView>
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
                    }</ScrollView>) : (
                    <ActivityIndicator size={'large'}/>
                )}
            </SafeAreaView>
        );
    }
);



