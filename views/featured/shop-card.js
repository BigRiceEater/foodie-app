import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ShopCard = (props) => {
  const { title, imageUrl } = props.data;
  return (
    <View style={styles.shop}>
      <Image style={{ width: 150, height: 200 }} source={{ uri: imageUrl }} />
      <Text numberOfLines={1} style={styles.shopTitle}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  shop: {
    margin: 10,
    width: 150,
    height: 200,
    backgroundColor: 'lightgreen'
  },
  shopTitle: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    backgroundColor: '#FFFFFFCC'
  }
});

export default ShopCard;
