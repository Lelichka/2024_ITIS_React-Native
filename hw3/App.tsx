import React, { useState } from 'react';
import {
  Button,
  ScrollView,
  Text,
  View,
} from 'react-native';
import DisabledButton from './components/DisabledButton';
import TextInputSection from './components/TextInputSection';

const App = () => {

  return (
    <ScrollView>
      <DisabledButton />
      <View style={{height:1, backgroundColor: 'black', marginVertical: 20}}/>
      <TextInputSection />
    </ScrollView>
  );
};

export default App;
