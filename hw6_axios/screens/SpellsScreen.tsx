import React, {useEffect} from 'react';
import {useRootStore} from '../hooks/useRootStore.ts';
import {ActivityIndicator, FlatList, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {observer} from 'mobx-react';
import {styles} from '../styles.ts';
import SpellCard from '../componets/SpellCard.tsx';

export const SpellsScreen = observer(
    () => {
        const {spellsStore} = useRootStore();
        useEffect(() => {
            spellsStore.getAllSpells();
        }, [spellsStore]);
        return (
            <SafeAreaView style={styles.safeAreaView}>
                {!spellsStore.isLoading ? (spellsStore.spells && spellsStore.spells.length > 0 ?
                    <View>
                        <FlatList data={spellsStore.spells}
                                  renderItem={item => <SpellCard key={item.item.id} id={item.item.id}
                                                                 name={item.item.name}
                                                                 description={item.item.description}/>}/>
                    </View> :
                    <TouchableOpacity style={styles.homePageButton}
                                      onPress={spellsStore.getAllSpells}><Text style={{color: '#FFDB58'}}>Try to
                        load spells</Text></TouchableOpacity>) : (
                    <ActivityIndicator size={'large'}/>
                )}
            </SafeAreaView>
        );
    }
);





