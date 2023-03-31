import {getCategory, getProduct} from '_actions/main';
import {Container} from '_organism/Basic';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Alert, FlatList} from 'react-native';
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

  return (
    <Container style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={productData}
          ListHeaderComponent={<ListHeaderComponent data={categoryData} />}
          keyExtractor={(item, index) => index.toString()}
          renderItem={RenderItem}
        />
      )}
    </Container>
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
