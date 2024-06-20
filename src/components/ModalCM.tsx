import { Modal, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

interface Props  {
    isVisible?: boolean;

}
const ModalCM = () => {
    const [isVisible, setIsvisible] = useState(false);
  return (
    <View>
      <Text>ModalCM</Text>
        
    </View>
  )
}

export default ModalCM

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: 'coral'
    }
})