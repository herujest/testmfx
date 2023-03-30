import {Dimensions, StatusBar} from 'react-native';
import {StyleSheet} from 'react-native';
export const {width, height} = Dimensions.get('window');

const Base = StyleSheet.create({
  'Basic.Container': {
    flex: 1,
    flexDirection: 'column',
    height: height,
    backgroundColor: 'white',
  },
  'Translucent.Container': {
    paddingTop: StatusBar.currentHeight || 34,
    backgroundColor: 'grey',
  },
  'Content.Theme.White': {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default Base;
