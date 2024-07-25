import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import {COLORS, FONTS} from '../../Constant';

const Header = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <TouchableOpacity activeOpacity={0.7}>
        <Entypo name="chevron-small-left" size={30} color={COLORS.mainColor} />
      </TouchableOpacity>
      <Text
        style={{
          color: COLORS.mainColor,
          fontSize: 20,
          fontFamily: FONTS.BASIC,
          fontWeight: '600',
          marginLeft: -30,
        }}>
        Product
      </Text>
      <View></View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
