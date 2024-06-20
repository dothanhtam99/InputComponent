/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  Keyboard,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import TextInputCM from './src/components/TextInputCM';

function App(): React.JSX.Element {
  const [text, setText] = useState('')
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={{flex: 1, backgroundColor: "#fff"}}>
        <Text style={{marginBottom: 20}}>Tam dt</Text>
        <TextInputCM value={text} lable="Type" onChange={(text) => setText(text)} placeholder='Type something' type='default' duration={150}/>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
 
});

export default App;
