import { useSelector } from 'react-redux';
import { Image, View, ScrollView } from 'react-native';

import { Store } from '../../../../store';
import { Text } from '../../../../components/UI/Text/Text';
import { Button } from '../../../../components/UI/Button/Button';
import { MapPin } from 'phosphor-react-native';
import { useAsyncDispatch } from '../../../../hooks/useAsyncDispatch';
import { addProduct } from '../../../Cart/slice/cartSlice';
import { FormattedCountryData } from '../../services/getAllCountriesType';

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
      contentContainerStyle={{
        alignItems: 'center',
        justifyContent: 'center',
      }}
      showsHorizontalScrollIndicator={false}>
      {data.map(productData => (
        <Button
          onPress={() => onProductPress(productData)}
          key={productData.countryId}
          variant="transparent"
          style={{
            width: '100%',
          }}>
          <View
            style={{
              borderBottomWidth: 1,
              flexDirection: 'row',
              padding: 20,
            }}>
            <Image
              resizeMode="contain"
              source={{ uri: productData.countryFlag.image, width: 100 }}
              alt={productData.countryFlag.alt}
            />
            <View>
              <View style={{ flexDirection: 'row' }}>
                <Text numberOfLines={1}>
                  {productData.formattedCountryName}
                </Text>
              </View>
              <Text numberOfLines={1}>{productData.countryCapital}</Text>
              <View style={{ flexDirection: 'row' }}>
                <Text>{productData.countrySpokenLanguages}</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
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
