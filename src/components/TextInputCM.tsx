import {
  Animated,
  Easing,
  KeyboardType,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {isEmpty} from 'lodash';


interface Props {
  lable?: string;
  value?: string;
  onChange: (text: string) => void;
  placeholder?: string | undefined;
  type?: KeyboardType;
  onFocus?: () => void;
  onBlur?: () => void;
  duration?: number;
}

const TextInputCM = (props: Props) => {
  const {value, onChange, placeholder, type, lable, onBlur, onFocus, duration} = props;
  const transLable = useRef(new Animated.Value(0));
  const [isFocused, setIsFocused] = useState(false);
  const [showPlaceholder, setShowPlaceholder] = useState(false);
  const [textLable, setTextLable] = useState(true)


  useEffect(() => {
    if (!isEmpty(value)) {
      setShowPlaceholder(true);
      animateTransform(-45);
    } else {
      setShowPlaceholder(false);
      animateTransform(0);
    }
  }, [value]);
  
  const handleFocus = () => {
    animateTransform(-25);
    setIsFocused(true);
    setShowPlaceholder(true);
    if (onFocus) {
      onFocus();
    }
  };

  
  const handleBlur = () => {
    if (isEmpty(value)) {
      animateTransform(0);
      setShowPlaceholder(false);
    }
    setIsFocused(false);
    if (onBlur) {
      onBlur();
    }
  };
  const animateTransform = (toValue: number) => {
    Animated.timing(transLable.current, {
      toValue,
      duration,
      useNativeDriver: true,
      easing: Easing.ease,
    }).start();
  };

  const transX = transLable.current.interpolate({
    inputRange: [-40, 0],
    outputRange: [10, 0],
    extrapolate: 'clamp',
  });

  const lableColor = transLable.current.interpolate({
    inputRange: [0, 2],
    outputRange: ['gray', '#000'],
    extrapolate: 'clamp',
  });
  return (
    <View style={styles.container}>
      {!isEmpty(lable) && (
      <Animated.View
        style={[
          styles.lableContainer,
          {transform: [{translateY: transLable.current}, {translateX: transX}]},
        ]}>
        <Animated.Text style={{color: lableColor}}>{lable}</Animated.Text>
      </Animated.View>
      )}
      <TextInput
        keyboardType={type}
        style={[styles.inputContainer]}
        placeholder={showPlaceholder ? placeholder ?? '' : ''}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChangeText={text => onChange(text)}
        value={value}
      />
    </View>
  );
};

export default TextInputCM;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 5,
    margin: 10,
     position: 'relative',
  },
  inputContainer: {
    padding: 10,
  },
  lableContainer: {
    position: 'absolute',
    padding: 14,
    backgroundColor: '#fff',
    marginStart: 6
  },
  focusedInput: {
    borderColor: 'blue',
  },
});
