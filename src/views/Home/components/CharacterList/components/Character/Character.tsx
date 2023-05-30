import { Image, View } from 'react-native';
import {
  GenderFemale,
  GenderMale,
  GenderNeuter,
  MapPin,
} from 'phosphor-react-native';

import { Button } from '../../../../../../components/UI/Button/Button';
import { HomeSliceData } from '../../../../slice/homeSlice';
import { Text } from '../../../../../../components/UI/Text/Text';
import { useAsyncDispatch } from '../../../../../../hooks/useAsyncDispatch';
import { addCharacter } from '../../../../../Cart/slice/cartSlice';

import styles from './styles';

export interface RenderItemProps {
  character: HomeSliceData;
}

export const Character = ({ character }: RenderItemProps) => {
  const dispatch = useAsyncDispatch();

  const onAddCharaterToCart = (characterData: HomeSliceData) => {
    dispatch(addCharacter(characterData));
  };

  return (
    <Button
      testID="home-addCharacter-button"
      onPress={() => onAddCharaterToCart(character)}
      key={character.id}
      variant="transparent"
      style={styles.button}>
      <View style={styles.card}>
        <Image
          resizeMode="contain"
          source={{ uri: character.image, width: 100 }}
        />
        <View>
          <View style={styles.nameContainer}>
            <Text style={styles.name} numberOfLines={1}>
              {character.name}
            </Text>
          </View>
          <View style={styles.genderContainer}>
            {character.gender === 'Female' ? (
              <GenderFemale size={15} />
            ) : (
              <GenderMale size={15} />
            )}
            <Text>{character.gender}</Text>
          </View>
          <Text
            style={character.species === 'Human' ? styles.human : styles.alien}>
            {character.species}
          </Text>
          <View style={styles.genderContainer}>
            <Text style={styles.status}>{character.status}</Text>
          </View>
        </View>
        <View style={styles.sellerPriceContainer}>
          <Text style={styles.sellerPriceText}>${character.price}</Text>
        </View>
      </View>
    </Button>
  );
};
