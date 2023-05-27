import { useSelector } from 'react-redux';
import { Image, View, ScrollView } from 'react-native';

import { Store } from '../../../../store';
import { Text } from '../../../../components/UI/Text/Text';
import { Button } from '../../../../components/UI/Button/Button';
import { MapPin } from 'phosphor-react-native';

export const ProductList = () => {
  const { data } = useSelector(({ homeReducer }: Store) => homeReducer);

  if (!data) {
    return null;
  }

  return (
    <ScrollView
      contentContainerStyle={{
        alignItems: 'center',
        justifyContent: 'center',
      }}
      showsHorizontalScrollIndicator={false}>
      {data.map(
        ({
          countryArea,
          countryCapital,
          countryCardPrice,
          countryFlag,
          countrySpokenLanguages,
          formattedCountryName,
          countryId,
        }) => (
          <Button
            variant="transparent"
            style={{
              width: '100%',
            }}>
            <View
              key={countryId}
              style={{
                borderBottomWidth: 1,
                flexDirection: 'row',
                padding: 20,
              }}>
              <Image
                resizeMode="contain"
                source={{ uri: countryFlag.image, width: 100 }}
                alt={countryFlag.alt}
              />
              <View>
                <View style={{ flexDirection: 'row' }}>
                  <Text numberOfLines={1}>{formattedCountryName}</Text>
                </View>
                <Text numberOfLines={1}>{countryCapital}</Text>
                <View style={{ flexDirection: 'row' }}>
                  <Text>{countrySpokenLanguages}</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <MapPin />
                  <Text>{countryArea}km²</Text>
                </View>
                <Text>R$: {countryCardPrice}</Text>
              </View>
            </View>
          </Button>
        ),
      )}
    </ScrollView>
  );
};
