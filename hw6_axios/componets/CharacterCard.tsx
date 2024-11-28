import {CharacterModel} from '../modules/Characters/CharacterModel.ts';
import {Image, Text, View} from 'react-native';
import React from 'react';
import {styles} from '../styles.ts';

export const CharacterCard = (character: CharacterModel) => {
    return (
        <View style={styles.card}>
            <Text style={styles.cardTitle}>{character.name}</Text>
            <View style={styles.characterInfo}>
                <View>
                    {character.species ? <Text
                        style={styles.infoText}>{`Species: ${character.species}`}</Text> : null}
                    {character.ancestry ? <Text
                        style={styles.infoText}>{`Ancestry: ${character.ancestry}`}</Text> : null}
                    {character.house ?
                        <Text style={styles.infoText}>{`House: ${character.house}`}</Text> : null}
                    {character.dateOfBirth ? <Text
                        style={styles.infoText}>{`Date of birth: ${character.dateOfBirth}`}</Text> : null}
                </View>
                <Image
                    source={{
                        uri: character.image,
                    }}
                    style={styles.cardImage}
                />
            </View>
        </ View>
    );
};
