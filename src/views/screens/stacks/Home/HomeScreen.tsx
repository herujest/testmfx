import {getCategory, getProduct} from '_actions/main';
import Icon from '_atom/Icon';
import React, {useCallback, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  Pressable,
  Text,
  View,
} from 'react-native';
import {ConnectedProps, connect} from 'react-redux';
import {RootState} from 'src/redux';
import {CategoryType, ProductType} from 'src/redux/reducers/main';
import {RenderCategory} from './RenderCategory';
import {RenderItem} from './RenderProducts';
import {styles} from './styles';

type Props = ReduxProps;

const ListHeaderComponent = ({data}: {data: CategoryType[]}) => {
  return (
    <FlatList
      horizontal
      data={data}
      renderItem={RenderCategory}
      keyExtractor={(item, index) => index.toString()}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.listHeaderContent}
    />
  );
};

const HomeScreen: React.FC<Props> = props => {
  const {isLoading, _getCategory, _getProducts} = props;
  const [categoryData, setCategoryData] = useState<CategoryType[]>([]);
  const [productData, setProductData] = useState<ProductType[]>([]);

  useEffect(() => {
    fetchAllData();
  }, []);

  const filter = useCallback(() => {
    const filterSearch = 'CAP'.toLowerCase();
    const newRes = productData.filter(i =>
      i.name.toLowerCase().includes(filterSearch),
    );
    setProductData(newRes);
  }, [productData]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.buttonIcon}>
          <Icon name="left" />
        </View>
        <Text style={styles.headerTitle}>Shoes</Text>
        <Pressable style={styles.buttonIcon}>
          <Icon name="filter" />
        </Pressable>
      </View>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <>
          <View>
            <ListHeaderComponent data={categoryData} />
          </View>
          <FlatList
            data={productData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={RenderItem}
            numColumns={2}
            contentContainerStyle={styles.content}
          />
        </>
      )}
    </View>
  );

  async function fetchAllData() {
    try {
      const [categories, products] = await Promise.all([
        _getCategory(),
        _getProducts(),
      ]);

      setCategoryData(categories);
      setProductData(products);
    } catch (error: any) {
      Alert.alert('Request Failed', error.message);
    }
  }
};

const mapStateToProps = ({main}: RootState) => ({
  isLoading: main.isLoading,
});

const mapDispatchToProps = {
  _getProducts: getProduct,
  _getCategory: getCategory,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type ReduxProps = ConnectedProps<typeof connector>;

export default connector(HomeScreen);
