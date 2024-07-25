import {
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLORS, FONTS, WIDTH} from '../../Constant';
import Header from '../../components/Header';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Card from '../../components/Card';
import ModalToast from '../../components/Modal';

const Home = () => {
  const [selectedTab, setSelectedTab] = useState('product');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [tabs, setTabs] = useState([
    {
      id: 'product',
    },
    {
      id: 'bid',
    },
    {
      id: 'qun',
    },
    {
      id: '',
    },
  ]);
  const [products, setProduct] = useState([
    {
      id: 1,
      title: 'Jordan 4 Craft photon',
      image: require('../../assets/images/productImage.png'),
      price: 211.0,
      type: 'product',
      qun: 10,
    },
    {
      id: 2,
      title: 'Jordan 4 Craft photon',
      image: require('../../assets/images/productImage.png'),
      price: 211.0,
      type: 'product',
      qun: 10,
    },
    {
      id: 3,
      title: 'Jordan 4 Craft photon',
      image: require('../../assets/images/productImage.png'),
      price: 211.0,
      type: 'product',
      qun: 10,
    },
    {
      id: 4,
      title: 'Jordan 4 Craft photon',
      image: require('../../assets/images/productImage.png'),
      type: 'bid',
    },
    {
      id: 5,
      title: 'Jordan 4 Craft photon',
      image: require('../../assets/images/productImage.png'),
      type: 'bid',
    },
    {
      id: 6,
      title: 'Jordan 4 Craft photon',
      image: require('../../assets/images/productImage.png'),
      type: 'bid',
    },
    {
      id: 7,
      title: 'Jordan 4 Craft photon',
      image: require('../../assets/images/productImage.png'),
      type: 'bid',
    },

    {
      id: 10,
      title: 'Jordan 4 Craft photon',
      image: require('../../assets/images/productImage.png'),
      price: 499,
      type: 'qun',
      qun: 1,
    },
    {
      id: 11,
      title: 'Jordan 4 Craft photon',
      image: require('../../assets/images/productImage.png'),
      price: 499,
      type: 'qun',
      qun: 1,
    },
    {
      id: 12,
      title: 'Jordan 4 Craft photon',
      image: require('../../assets/images/productImage.png'),
      price: 499,
      type: 'qun',
      qun: 1,
    },
  ]);
  const [isConfirm, setIsConfirm] = useState(false);
  const [isPurchase, setIsPurchase] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  useEffect(() => {
    let allfilterProducts = products.filter(e => e.type == selectedTab);
    setFilterProducts(allfilterProducts);
  }, [selectedTab]);
  return (
    <>
      <SafeAreaView>
        <ScrollView
          style={{
            backgroundColor: COLORS.screenColor,
            width: WIDTH,
            height: '100%',
          }}>
          <View>
            <View style={{paddingHorizontal: 10, marginTop: 10}}>
              <Header />
              <View style={{marginTop: 10}}>
                <View
                  style={{
                    borderRadius: 25,
                    width: '100%',
                    height: 50,
                    borderColor: COLORS.mainColor,
                    borderWidth: 1,
                  }}>
                  <View
                    style={{
                      paddingHorizontal: 10,
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 10,
                    }}>
                    <AntDesign
                      size={20}
                      name="search1"
                      color={COLORS.mainColor}
                    />
                    <TextInput
                      style={{
                        width: '90%',
                        fontSize: 18,
                        color: COLORS.mainColor,
                      }}
                      placeholderTextColor={COLORS.mainColor}
                      placeholder="Search product"
                    />
                  </View>
                </View>
              </View>
              <View style={{marginTop: 10}}>
                <ScrollView horizontal>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 10,
                    }}>
                    {tabs.map(e => (
                      <TouchableOpacity
                        key={e.id}
                        onPress={() => setSelectedTab(e.id)}
                        style={{
                          width: 100,
                          height: 40,
                          borderRadius: 10,
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                          borderColor:
                            e.id == selectedTab
                              ? 'white'
                              : 'rgba(255, 255, 255, 0.12)',
                          borderWidth: 1,
                        }}></TouchableOpacity>
                    ))}
                  </View>
                </ScrollView>
              </View>
              <View style={{marginTop: 20}}>
                <Text
                  style={{
                    fontFamily: FONTS.BASIC,
                    color: 'rgba(255, 255, 255, 0.7)',
                    fontWeight: '600',
                    fontSize: 18,
                  }}>
                  {filterProducts?.length} Products
                </Text>
                {filterProducts?.map(e => (
                  <Card
                    key={e.id}
                    qun={e?.qun}
                    img={e?.image}
                    price={e?.price}
                    title={e.title}
                    type={e?.type}
                    onClick={() => setModalIsOpen(true)}
                  />
                ))}
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
      {/* <Modal/> */}
      <ModalToast
        visible={modalIsOpen}
        onConfirm={() => setIsConfirm(true)}
        onClose={() => {
          setModalIsOpen(false);
          setIsConfirm(false);
          setIsPurchase(false)
        }}
        onPurchase={() => {
          setIsPurchase(true);
        }}
        confirm={isPurchase}
        isPaymentMethod={isConfirm}
      />
    </>
  );
};

export default Home;

const styles = StyleSheet.create({});
