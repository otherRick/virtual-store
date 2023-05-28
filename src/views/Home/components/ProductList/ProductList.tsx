import { useSelector } from 'react-redux';
import { Image, View, ScrollView } from 'react-native';

import { Store } from '../../../../store';
import { Text } from '../../../../components/UI/Text/Text';
import { Button } from '../../../../components/UI/Button/Button';
import { MapPin } from 'phosphor-react-native';
import { useAsyncDispatch } from '../../../../hooks/useAsyncDispatch';
import { addProduct } from '../../../Cart/slice/cartSlice';
import { FormattedCountryData } from '../../services/getAllCountriesType';
import styles from './styles';

export const ProductList = () => {
  const dispatch = useAsyncDispatch();
  const { data } = useSelector(({ homeReducer }: Store) => homeReducer);

  if (!data) {
    return null;
  }

  const onProductPress = (productData: FormattedCountryData) => {
    dispatch(addProduct(productData));
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsHorizontalScrollIndicator={false}>
      {data.map(productData => (
        <Button
          onPress={() => onProductPress(productData)}
          key={productData.countryId}
          variant="transparent"
          style={styles.button}>
          <View style={styles.card}>
            <Image
              resizeMode="contain"
              source={{ uri: productData.countryFlag.image, width: 100 }}
              alt={productData.countryFlag.alt}
            />
            <View>
              <View style={styles.name}>
                <Text numberOfLines={1}>
                  {productData.formattedCountryName}
                </Text>
              </View>
              <Text numberOfLines={1}>{productData.countryCapital}</Text>
              <View style={styles.lenguage}>
                <Text>{productData.countrySpokenLanguages}</Text>
              </View>
              <View style={styles.area}>
                <MapPin />
                <Text>{productData.countryArea}km²</Text>
              </View>
              <Text>R$: {productData.countryCardPrice}</Text>
            </View>
          </View>
        </Button>
      ))}
    </ScrollView>
  );
};
