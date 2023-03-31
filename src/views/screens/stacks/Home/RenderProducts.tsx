import Icon from '_atom/Icon';
import Rating from '_molecule/Rating';
import React from 'react';
import {ImageBackground, Pressable, Text, View} from 'react-native';
import {styles} from './styles';

const Tag = ({newItem, outStock}: {newItem: boolean; outStock: boolean}) => {
  if (newItem) {
    return (
      <View style={[styles.tag, {backgroundColor: undefined}]}>
        <Text style={styles.tagNew}>New</Text>
      </View>
    );
  } else if (outStock) {
    return (
      <View style={styles.tag}>
        <Text style={styles.tagOutStock}>Out of Stock</Text>
      </View>
    );
  } else {
    return null;
  }
};

export const RenderItem = ({item, index}) => {
  return (
    <View style={styles.productCard}>
      <Tag newItem={item.new} outStock={item.out_of_stock} />
      <ImageBackground
        source={{uri: item.image}}
        imageStyle={styles.productImage}
        resizeMethod="auto"
        resizeMode="contain"
        style={styles.cardImage}>
        <Pressable style={{alignItems: 'flex-end'}}>
          <Icon name="love" color="#848486" />
        </Pressable>
      </ImageBackground>
      <View>
        <Rating rate={item.rating} />
        <Text style={{fontSize: 16}}>{item.name}</Text>
        <View style={styles.rowStartBetween}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>{item.price}</Text>
          <Text style={{fontSize: 14, color: '#757496'}}>{item.off}</Text>
        </View>
      </View>
    </View>
  );
};
