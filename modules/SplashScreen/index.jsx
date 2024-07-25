import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {COLORS, FONTS, HEIGHT, WIDTH} from '../../Constant';
import {useNavigation} from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('HOME');
    }, 3000);
  }, []);
  return (
    <View
      style={{
        width: WIDTH,
        height: HEIGHT,
        backgroundColor: COLORS.screenColor,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontFamily: FONTS.BASIC,
          fontSize: 50,
          color: COLORS.mainColor,
          fontWeight: '800',
        }}>
        ECOM
      </Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
