import { Alert, Image, ScrollView, View } from 'react-native';
import { Trash } from 'phosphor-react-native';
import { useSelector } from 'react-redux';

import { Text } from '../../../../components/UI/Text/Text';
import { Store } from '../../../../store';
import { QuantitySelector } from './components/QuantitySelector/QuantitySelector';
import { Button } from '../../../../components/UI/Button/Button';
import { useAsyncDispatch } from '../../../../hooks/useAsyncDispatch';
import { removeAllCharacters } from '../../slice/cartSlice';

import styles from './styles';

export const CartCharacterList = () => {
  const cartStore = useSelector((store: Store) => store.cartReducer);
  const dispatch = useAsyncDispatch();

  if (cartStore.characters.length === 0) {
    return null;
  }

  const onRemoveAllPress = () => {
    Alert.alert(
      'Are you sure ?',
      'If click confirm, all your items will be removed from the list',
      [
        {
          text: 'Cancel',
        },
        {
          onPress: () => dispatch(removeAllCharacters()),
          text: 'Confirm',
        },
      ],
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {cartStore.characters.map(character => (
        <View key={character.id} style={styles.list}>
          <Image
            style={styles.image}
            source={{ uri: character.image, width: 70, height: 70 }}
            resizeMode="contain"
          />
          <View style={styles.nameContainer}>
            <Text style={styles.name}>{character.name}</Text>
          </View>
          <QuantitySelector {...{ character }} />
        </View>
      ))}
      <Button onPress={onRemoveAllPress}>
        <View style={styles.removeButton}>
          <Text>Clean Cart</Text>
          <Trash size={50} color="red" />
        </View>
      </Button>
    </ScrollView>
  );
};
