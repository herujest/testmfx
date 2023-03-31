import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');

const shadow = {
  shadowColor: 'black',
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.18,
  shadowRadius: 1.0,
  elevation: 2,
};

const shadow2 = {
  shadowColor: 'white',
  shadowOffset: {
    width: 1,
    height: 1,
  },
  shadowOpacity: 0.18,
  shadowRadius: 2.0,
  elevation: 3,
};

export const styles = StyleSheet.create({
  rowSpaceBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowStartBetween: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  content: {
    paddingVertical: width * 0.02,
    paddingHorizontal: width * 0.04,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: width * 0.04,
    paddingTop: width * 0.1,
    paddingBottom: width * 0.05,
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: width * 0.06,
    color: 'black',
    flex: 1,
    paddingHorizontal: width * 0.03,
  },
  listHeaderContent: {
    paddingBottom: width * 0.02,
    paddingLeft: width * 0.03,
  },
  buttonIcon: {
    width: width * 0.1,
    height: width * 0.1,
    borderRadius: (width * 0.1) / 2,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    ...shadow,
  },
  categoryCardItem: {
    ...shadow,
    backgroundColor: 'white',
    borderRadius: width * 0.02,
    paddingHorizontal: width * 0.03,
    paddingVertical: width * 0.04,
    marginRight: width * 0.03,
  },
  productCard: {
    ...shadow2,
    flex: 1 / 2,
    backgroundColor: 'white',
    borderRadius: width * 0.02,
    paddingHorizontal: width * 0.03,
    paddingVertical: width * 0.04,
    margin: width * 0.02,
  },
  tag: {
    alignSelf: 'baseline',
    backgroundColor: '#e75054',
    borderRadius: width * 0.01,
    paddingVertical: width * 0.01,
    paddingHorizontal: width * 0.012,
    position: 'absolute',
    margin: 11,
  },
  tagNew: {fontSize: 12, fontWeight: '500', color: 'black'},
  tagOutStock: {color: 'white', fontWeight: '500', fontSize: 12},
  cardImage: {width: '100%', height: 120},
  productImage: {aspectRatio: 1},
});
