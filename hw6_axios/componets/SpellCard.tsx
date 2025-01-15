import {SpellModel} from '../modules/Spells/SpellModel.ts';
import {Text, View} from 'react-native';
import React from 'react';
import {styles} from '../styles.ts';

const SpellCard = (spell: SpellModel) => {
    return (
        <View style={styles.spellCard}>
            <View>
                <Text style={styles.spellCardHeader}>{spell.name}</Text>
                <Text style={styles.spellCardText}>{spell.description}</Text>
            </View>
        </View>
    );
};
export default SpellCard;

