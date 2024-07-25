import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../../Constant';

const Card = ({type = '', img = '', title = '', qun = 0, price = 0,onClick}) => {
  return (
    <View
      style={{
        width: '100%',
        height: 80,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <View style={{flexDirection: 'row', gap: 10}}>
        <Image
          style={{width: 70, height: 70, borderRadius: 15}}
          resizeMode="stretch"
          source={img}
        />
        <View style={{height: '100%'}}>
          <Text
            style={{
              fontFamily: FONTS.BASIC,
              fontSize: 16,
              color: 'white',
              fontWeight: '700',
            }}>
            {title}
          </Text>
          <Text
            style={{
              fontFamily: FONTS.BASIC,
              fontSize: 12,
              color: 'rgba(255, 255, 255, 0.7)',
              fontWeight: '700',
            }}>
            {type == 'product'
              ? `${qun} Available`
              : type != 'qun'
              ? 'No pre-bid'
              : `Qty ${qun}`}
          </Text>
          {type != 'bid' ? (
            <Text
              style={{
                fontFamily: FONTS.BASIC,
                fontSize: 18,
                color: 'white',
                fontWeight: '700',
                marginTop: 6,
              }}>
              {type == 'product'
                ? `$${price}`
                : type != 'qun'
                ? ''
                : `Sold in $${price}`}
            </Text>
          ) : (
            <View
              style={{
                marginTop: 6,
                flexDirection: 'row',
                alignItems: 'center',
                gap: 5,
                marginLeft: -2,
              }}>
              <TouchableOpacity
                activeOpacity={0.7}
                style={{
                  width: 90,
                  height: 25,
                  borderRadius: 10,
                  backgroundColor: COLORS.screenColor,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderWidth: 1,
                  borderColor: 'white',
                }}>
                <Text
                  style={{
                    fontFamily: FONTS.BASIC,
                    fontSize: 12,
                    color: COLORS.mainColor,
                  }}>
                  Remind me
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.7}
                style={{
                  width: 90,
                  height: 25,
                  borderRadius: 10,
                  backgroundColor: 'white',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontFamily: FONTS.BASIC,
                    fontSize: 12,
                    color: COLORS.screenColor,
                  }}>
                  Pre-Bid
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
      {type == 'product' && (
        <TouchableOpacity
        onPress={onClick}
          activeOpacity={0.7}
          style={{
            width: 90,
            height: 40,
            borderRadius: 12,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontFamily: FONTS.BASIC,
              fontSize: 12,
              color: COLORS.screenColor,
            }}>
            Buy Now
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({});
