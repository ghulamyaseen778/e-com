import {
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLORS, FONTS, HEIGHT, WIDTH} from '../../Constant';
import Button from '../Button';
import AntDesign from 'react-native-vector-icons/AntDesign';

const ModalToast = ({
  onClose,
  visible,
  isPaymentMethod = true,
  onConfirm,
  confirm,
  onPurchase,
}) => {
  return (
    <Modal
      visible={visible}
      transparent
      statusBarTranslucent
      animationType="fade">
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onClose}
        style={{
          backgroundColor: 'rgba(0,0,0,0.6)',
          width: WIDTH,
          height: '100%',
        }}></TouchableOpacity>
      <ScrollView
        style={{
          zIndex: confirm ? -10 : 10,
          width: WIDTH,
          position: 'absolute',
          bottom: 0,
          backgroundColor: 'white',
          // height: 400,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          maxHeight: 600,
        }}>
        <View>
          <View
            style={{
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 8,
            }}>
            <View
              style={{
                width: 50,
                height: 5,
                borderRadius: 30,
                backgroundColor: 'rgba(224, 224, 224, 1)',
              }}></View>
          </View>
          <Text
            style={{
              fontFamily: FONTS.BASIC,
              color: COLORS.screenColor,
              fontWeight: '700',
              textAlign: 'center',
              marginTop: 10,
              fontSize: 16,
            }}>
            Product Details
          </Text>
          <Image
            style={{width: '100%', height: 130, marginTop: 10}}
            resizeMode="stretch"
            source={require('../../assets/images/ProductDetailImage.png')}
          />
          <View style={{padding: 10}}>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  fontFamily: FONTS.BASIC,
                  fontSize: 14,
                  color: COLORS.screenColor,
                  fontWeight: '700',
                }}>
                Product
              </Text>
              <Text
                style={{
                  fontFamily: FONTS.BASIC,
                  fontSize: 14,
                  color: 'rgba(0, 0, 0, 0.6)',
                  fontWeight: '700',
                }}>
                Jordan 4 Craft photon
              </Text>
            </View>
          </View>
          <View
            style={{
              width: '100%',
              height: 1,
              backgroundColor: 'rgba(0, 0, 0, 0.1)',
            }}></View>
          <View style={{padding: 10}}>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  fontFamily: FONTS.BASIC,
                  fontSize: 14,
                  color: COLORS.screenColor,
                  fontWeight: '700',
                }}>
                Size
              </Text>
              <Text
                style={{
                  fontFamily: FONTS.BASIC,
                  fontSize: 14,
                  color: 'rgba(0, 0, 0, 0.6)',
                  fontWeight: '700',
                }}>
                40
              </Text>
            </View>
          </View>
          <View
            style={{
              width: '100%',
              height: 1,
              backgroundColor: 'rgba(0, 0, 0, 0.1)',
            }}></View>
          <View style={{padding: 10}}>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  fontFamily: FONTS.BASIC,
                  fontSize: 14,
                  color: COLORS.screenColor,
                  fontWeight: '700',
                }}>
                Qty 1
              </Text>
              <Text
                style={{
                  fontFamily: FONTS.BASIC,
                  fontSize: 14,
                  color: 'rgba(0, 0, 0, 0.6)',
                  fontWeight: '700',
                }}>
                $ 211
              </Text>
            </View>
          </View>
        </View>
        {isPaymentMethod && (
          <View>
            <View style={{padding: 10}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    fontFamily: FONTS.BASIC,
                    color: COLORS.screenColor,
                    fontWeight: '700',
                    textAlign: 'center',
                    marginTop: 10,
                    fontSize: 16,
                  }}>
                  Product Details
                </Text>
                <TouchableOpacity>
                  <AntDesign name="edit" color={COLORS.screenColor} size={20} />
                </TouchableOpacity>
              </View>
              <Text
                style={{
                  fontFamily: FONTS.BASIC,
                  color: COLORS.screenColor,
                  fontWeight: '700',
                  // textAlign: 'center',
                  marginTop: 10,
                  fontSize: 16,
                  marginLeft: 10,
                }}>
                Home
              </Text>
              <Text
                style={{
                  fontFamily: FONTS.BASIC,
                  color: '#ACACAC',
                  fontWeight: '700',
                  // textAlign: 'center',
                  fontSize: 12,
                  marginLeft: 10,
                }}>
                891 Sundown Lane 1 Sundown Lane, Hill apartment, United State,
                California
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    fontFamily: FONTS.BASIC,
                    color: COLORS.screenColor,
                    fontWeight: '700',
                    textAlign: 'center',
                    marginTop: 10,
                    fontSize: 16,
                  }}>
                  Payment method
                </Text>
                <TouchableOpacity>
                  <AntDesign name="edit" color={COLORS.screenColor} size={20} />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop: 10,
                }}>
                <View
                  style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
                  <Image
                    style={{width: 30, height: 30}}
                    resizeMode="stretch"
                    source={require('../../assets/images/applePay.png')}
                  />
                  <Text
                    style={{
                      fontFamily: FONTS.BASIC,
                      color: COLORS.screenColor,
                      fontWeight: '600',
                      // textAlign: 'center',
                      fontSize: 16,
                    }}>
                    Apple pay
                  </Text>
                </View>
                <Text
                  style={{
                    fontFamily: FONTS.BASIC,
                    color: 'rgba(0,0,0,.6)',
                    fontWeight: '700',
                    // textAlign: 'center',
                    fontSize: 16,
                  }}>
                  **** **** **** 2233
                </Text>
              </View>
            </View>
            <View style={{padding: 10}}>
              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    fontFamily: FONTS.BASIC,
                    fontSize: 14,
                    color: 'rgba(0, 0, 0, 0.4)',
                    fontWeight: '700',
                  }}>
                  Shipping
                </Text>
                <Text
                  style={{
                    fontFamily: FONTS.BASIC,
                    fontSize: 14,
                    color: 'rgba(0, 0, 0, 0.4)',
                    fontWeight: '700',
                  }}>
                  $ 10
                </Text>
              </View>
            </View>
            <View
              style={{
                width: '100%',
                height: 1,
                backgroundColor: 'rgba(0, 0, 0, 0.1)',
              }}></View>
            <View style={{padding: 10}}>
              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    fontFamily: FONTS.BASIC,
                    fontSize: 14,
                    color: 'rgba(0, 0, 0, 0.4)',
                    fontWeight: '700',
                  }}>
                  Est Tax
                </Text>
                <Text
                  style={{
                    fontFamily: FONTS.BASIC,
                    fontSize: 14,
                    color: 'rgba(0, 0, 0, 0.4)',
                    fontWeight: '700',
                  }}>
                  $ 1
                </Text>
              </View>
            </View>
            <View
              style={{
                width: '100%',
                height: 1,
                backgroundColor: 'rgba(0, 0, 0, 0.1)',
              }}></View>
            <View style={{padding: 10}}>
              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    fontFamily: FONTS.BASIC,
                    fontSize: 14,
                    color: COLORS.screenColor,
                    fontWeight: '700',
                  }}>
                  Total
                </Text>
                <Text
                  style={{
                    fontFamily: FONTS.BASIC,
                    fontSize: 14,
                    color: 'rgba(0, 0, 0, 0.6)',
                    fontWeight: '700',
                  }}>
                  $ 222
                </Text>
              </View>
            </View>
          </View>
        )}
        <View style={{padding: 10}}>
          <View
            style={{
              width: '100%',
              height: 1,
              backgroundColor: 'rgba(0, 0, 0, 0.1)',
              marginTop: 20,
            }}></View>
          <Button
            text={isPaymentMethod ? 'Confirm Purchase' : 'Purchase'}
            onPress={isPaymentMethod ? onPurchase : onConfirm}
          />
        </View>
      </ScrollView>
      {confirm && (
        <View
          style={{
            width: '90%',
            height: 150,
            borderRadius: 10,
            backgroundColor: 'rgba(0,0,0,0.8)',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 20,
            position: 'absolute',
            top: WIDTH / 1.2,
            alignSelf: 'center',
            paddingVertical: 10,
            paddingHorizontal: 10,
          }}>
          <Text
            style={{
              fontFamily: FONTS.BASIC,
              fontSize: 16,
              color: 'white',
              textAlign: 'center',
            }}>
            Thanks for your purchase Confirmation sent to your email
          </Text>
          <TouchableOpacity
            activeOpacity={0.7}
            style={{
              width: 120,
              height: 40,
              borderRadius: 20,
              backgroundColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 10,
            }}>
            <Text
              style={{
                fontFamily: FONTS.BASIC,
                fontSize: 12,
                color: COLORS.screenColor,
              }}>
              Track your order
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </Modal>
  );
};

export default ModalToast;

const styles = StyleSheet.create({});
