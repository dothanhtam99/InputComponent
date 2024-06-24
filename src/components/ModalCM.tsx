import {
  Animated,
  Dimensions,
  Easing,
  Modal,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {AddCircle, ArrowLeft} from 'iconsax-react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import ToggleSwitch from 'toggle-switch-react-native';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

interface Props {
  isVisible: boolean;
}
const ModalCM = (props: Props) => {
  const {isVisible} = props;
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
  };

  const slide = useRef(new Animated.Value(300)).current;

  const slideUp = () => {
    Animated.timing(slide, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
      easing: Easing.ease,
    }).start();
  };

    const slideDown = () => {
      Animated.timing(slide, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
        easing: Easing.ease,
      }).start();
  };

  useEffect(() => {
    slideUp();
    slideDown();
  }, []);
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.modalContainer, {transform: [{ translateY: slide}]}]}>
        <View style={styles.modalView}>
          <Icon name="arrowleft" color="#000" />
          <Text style={styles.textTitle}>Tải ảnh</Text>
          <Icon name="closecircle" color="#000" />
        </View>

        <View
          style={{
            paddingHorizontal: 16,
            height: '65%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={styles.content}>
            <View style={styles.signature} />
          </View>
        </View>

        <View style={styles.footer}>
          <Switch
            style={{alignSelf: 'flex-start', marginBottom: 20}}
            trackColor={{false: '#767577', true: '#81b0ff'}}
            // thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />

          {
            <TouchableOpacity style={[styles.btnSave, {backgroundColor: isEnabled ? '#1E90FF' : '#A9A9A9'} ]} disabled={isEnabled}>
              <Text style={styles.btnText}>Lưu</Text>
            </TouchableOpacity>
          }
        </View>
      </Animated.View>
    </View>
  );
};

export default ModalCM;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  modalContainer: {
    width: screenWidth,
    backgroundColor: '#fff',
    height: '50%',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  modalView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  textTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
  },
  content: {
    backgroundColor: '#cccccc',
    width: '100%',
    height: '80%',
    borderRadius: 14,
    padding: 26,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signature: {
    backgroundColor: '#fff',
    width: '50%',
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  btnSave: {
    // backgroundColor: '#1E90FF',
    borderRadius: 10,
    padding: 14,
  },
  btnText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: '400',
  },
  footer: {
    paddingHorizontal: 16,
  },
});
