import { useSelector } from 'react-redux';
import { Image, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

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
        gap: 20,
      }}
      showsHorizontalScrollIndicator={false}>
      {data.map(
        ({
          languages,
          area,
          capital,
          flags,
          name: { common },
          translations,
        }) => {
          let lng = null;
          if (languages) {
            lng = Object.keys(languages);
          }

          return (
            <View
              style={{
                borderBottomWidth: 1,
                width: '100%',
                flexDirection: 'row',
                padding: 20,
              }}>
              <Image
                source={{ uri: flags.png, width: 100, height: 100 }}
                alt={flags.alt}
              />
              <View>
                <View style={{ flexDirection: 'row' }}>
                  <Text numberOfLines={1}>{common}</Text>
                  {translations[lng] && common !== translations[lng].common ? (
                    <>
                      <Text> | </Text>
                      <Text numberOfLines={1}>{translations[lng].common}</Text>
                    </>
                  ) : null}
                </View>
                {capital && <Text numberOfLines={1}>{capital[0]}</Text>}
                <View style={{ flexDirection: 'row' }}>
                  {languages
                    ? lng?.map((l, index) => {
                        return (
                          <Text>
                            {languages[l]}
                            {index === lng.length - 1 ? '' : ', '}
                          </Text>
                        );
                      })
                    : null}
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 'auto',
                  }}>
                  <MapPin />
                  <Text>{area}km²</Text>
                </View>
                <Text>
                  R$: {(Math.random() * 500 + 500).toFixed(2).replace('.', ',')}
                </Text>
              </View>
            </View>
          );
        },
      )}
    </ScrollView>
  );
};

const a = {
  altSpellings: ['GD'],
  area: 344,
  capital: ["St. George's"],
  capitalInfo: { latlng: [32.38, -64.68] },
  car: { side: 'left', signs: ['WG'] },
  cca2: 'GD',
  cca3: 'GRD',
  ccn3: '308',
  cioc: 'GRN',
  coatOfArms: {
    png: 'https://mainfacts.com/media/images/coats_of_arms/gd.png',
    svg: 'https://mainfacts.com/media/images/coats_of_arms/gd.svg',
  },
  continents: ['North America'],
  currencies: { XCD: { name: 'Eastern Caribbean dollar', symbol: '$' } },
  demonyms: {
    eng: { f: 'Grenadian', m: 'Grenadian' },
    fra: { f: 'Grenadienne', m: 'Grenadien' },
  },
  fifa: 'GRN',
  flag: '🇬🇩',
  flags: {
    alt: 'The flag of Grenada features a large central rectangular area surrounded by a red border, with three five-pointed yellow stars centered on the top and bottom borders. The central rectangle is divided diagonally into four alternating triangular areas of yellow at the top and bottom and green on the hoist and fly sides, and a five-pointed yellow star on a red circle is superimposed at its center. A symbolic nutmeg pod is situated on the green hoist-side triangle.',
    png: 'https://flagcdn.com/w320/gd.png',
    svg: 'https://flagcdn.com/gd.svg',
  },
  idd: { root: '+1', suffixes: ['473'] },
  independent: true,
  landlocked: false,
  languages: { eng: 'English' },
  latlng: [12.11666666, -61.66666666],
  maps: {
    googleMaps: 'https://goo.gl/maps/rqWyfUAt4xhvk1Zy9',
    openStreetMaps: 'https://www.openstreetmap.org/relation/550727',
  },
  name: {
    common: 'Grenada',
    nativeName: { eng: [Object] },
    official: 'Grenada',
  },
  population: 112519,
  region: 'Americas',
  startOfWeek: 'monday',
  status: 'officially-assigned',
  subregion: 'Caribbean',
  timezones: ['UTC-04:00'],
  tld: ['.gd'],
  translations: {
    ara: { common: 'غرينادا', official: 'غرينادا' },
    bre: { common: 'Grenada', official: 'Grenada' },
    ces: { common: 'Grenada', official: 'Grenada' },
    cym: { common: 'Grenada', official: 'Grenada' },
    deu: { common: 'Grenada', official: 'Grenada' },
    est: { common: 'Grenada', official: 'Grenada' },
    fin: { common: 'Grenada', official: 'Grenada' },
    fra: { common: 'Grenade', official: 'Grenade' },
    hrv: { common: 'Grenada', official: 'Grenada' },
    hun: { common: 'Grenada', official: 'Grenada' },
    ita: { common: 'Grenada', official: 'Grenada' },
    jpn: { common: 'グレナダ', official: 'グレナダ' },
    kor: { common: '그레나다', official: '그레나다' },
    nld: { common: 'Grenada', official: 'Grenada' },
    per: { common: 'گرنادا', official: 'گرنادا' },
    pol: { common: 'Grenada', official: 'Grenada' },
    por: { common: 'Granada', official: 'Grenada' },
    rus: { common: 'Гренада', official: 'Гренада' },
    slk: { common: 'Grenada', official: 'Grenada' },
    spa: { common: 'Grenada', official: 'Granada' },
    srp: { common: 'Гренада', official: 'Гренада' },
    swe: { common: 'Grenada', official: 'Grenada' },
    tur: { common: 'Grenada', official: 'Grenada' },
    urd: { common: 'گریناڈا', official: 'گریناڈا' },
    zho: { common: '格林纳达', official: '格林纳达' },
  },
  unMember: true,
};
