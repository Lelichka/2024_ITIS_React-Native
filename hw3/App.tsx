import React, { useState } from 'react';
import {
  ScrollView,
  View,
} from 'react-native';
import DisabledButton from './components/DisabledButton';
import TextInputSection from './components/TextInputSection';
import CustomBoxes from './components/CustomBoxes';

const App = () => {

  return (
    <ScrollView>
      <DisabledButton />
      <Divider/>
      <TextInputSection />
      <Divider/>
      <CustomBoxes/>
      <Divider/>
    </ScrollView>
    
  );
};

export default App;

const Divider = () => {
  return (
    <View style={{ height: 1, backgroundColor: 'black', marginVertical: 20 }} />
  )
}
