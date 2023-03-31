import React from 'react';
import Icon from '_atom/Icon';
import {View} from 'react-native';

const Rating = ({rate}: {rate: number}) => {
  const iconProps = {
    style: {marginRight: 3},
    color: '#fccf29',
    size: 13,
  };
  const wholeRate = Math.floor(rate);

  const getIconName = (idx: number) => {
    if (idx < wholeRate) {
      return 'star-filled';
    }
    if (idx >= wholeRate && idx < rate) {
      return 'star-half';
    }
    return 'star';
  };

  return (
    <View style={{flexDirection: 'row', marginVertical: 5}}>
      {[0, 1, 2, 3, 4].map((_, idx) => (
        <Icon {...iconProps} name={getIconName(idx)} />
      ))}
    </View>
  );
};

export default Rating;
