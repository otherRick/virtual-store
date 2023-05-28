import { Image, View } from 'react-native';
import { MapPin } from 'phosphor-react-native';

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
          <View style={styles.name}>
            <Text numberOfLines={1}>{character.name}</Text>
          </View>
          <Text numberOfLines={1}>{character.species}</Text>
          <View style={styles.lenguage}>
            <Text>{character.gender}</Text>
          </View>
          <View style={styles.area}>
            <MapPin />
            <Text>{character.status}</Text>
          </View>
          <Text>R$: {character.price}</Text>
        </View>
      </View>
    </Button>
  );
};
