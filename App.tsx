/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  Button,
  Keyboard,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import TextInputCM from './src/components/TextInputCM';
import ModalCM from './src/components/ModalCM';

function App(): React.JSX.Element {
  const [text, setText] = useState('');
  const [visible, setVisible] = useState(false);

  const handleToggle = () => {
    Keyboard.dismiss();
    setVisible(false);
  };

  const handleOpen = () => {
    setVisible(true);
  };
  return (
    <TouchableWithoutFeedback onPress={handleToggle}>
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <Text style={{marginBottom: 20}}>Tam dt</Text>
        <TextInputCM
          value={text}
          lable="Type"
          onChange={text => setText(text)}
          placeholder="Type something"
          type="default"
          duration={50}
        />
        <Button title="open BottomSheet" onPress={handleOpen} />

        {visible && <ModalCM isVisible={setVisible} />}
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({});

export default App;
