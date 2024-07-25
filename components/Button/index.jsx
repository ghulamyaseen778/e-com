import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../../Constant';

const Button = ({onPress,text}) => {
  return (
    <TouchableOpacity
    onPress={onPress}
      style={{
        width: '100%',
        height: 50,
        borderRadius: 30,
        backgroundColor: COLORS.buttonColor,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontFamily: FONTS.BASIC,
          color: COLORS.mainColor,
          fontSize: 16,
        }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({});
