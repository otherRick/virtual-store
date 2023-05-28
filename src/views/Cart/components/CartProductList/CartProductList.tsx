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

export const CartProductList = () => {
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
    <ScrollView>
      <Text>My list</Text>
      {cartStore.characters.map(character => (
        <View key={character.id} style={styles.list}>
          <Image
            source={{ uri: character.image, width: 100 }}
            resizeMode="contain"
          />
          <Text>{character.name}</Text>
          <QuantitySelector {...{ character }} />
        </View>
      ))}
      <Button onPress={onRemoveAllPress}>
        <Text>Remove All Items</Text>
        <Trash />
      </Button>
    </ScrollView>
  );
};
