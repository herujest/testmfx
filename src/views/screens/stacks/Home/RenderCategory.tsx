import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

export const RenderCategory = ({item, index}) => {
  return (
    <View style={styles.categoryCardItem}>
      <Text style={{color: 'black'}}>{item.name}</Text>
    </View>
  );
};
