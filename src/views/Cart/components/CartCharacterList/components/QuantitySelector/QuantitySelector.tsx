import { Minus, Plus, Trash } from 'phosphor-react-native';
import { View } from 'react-native';
import { Text } from '../../../../../../components/UI/Text/Text';
import { Button } from '../../../../../../components/UI/Button/Button';
import { useAsyncDispatch } from '../../../../../../hooks/useAsyncDispatch';
import {
  InicialStateData,
  addCharacter,
  removeCharacterQuantity,
  romoveCharacter,
} from '../../../../slice/cartSlice';
import styles from './styles';

export interface QuantitySelectorProps {
  character: InicialStateData;
}

export const QuantitySelector = ({ character }: QuantitySelectorProps) => {
  const dispatch = useAsyncDispatch();
  const onRemoveCharacter = () => {
    dispatch(removeCharacterQuantity(character));
  };
  const onAddCharacter = () => {
    dispatch(addCharacter(character));
  };

  const onRemoveAllCharacters = () => {
    dispatch(romoveCharacter(character));
  };

  const totalPrice = (Number(character?.price) * character?.quantity)
    .toFixed(2)
    .replace(',', '.');

  return (
    <View style={styles.container}>
      <View style={styles.selectorContainer}>
        <View style={styles.quantitySelector}>
          <Button onPress={onRemoveCharacter}>
            <Minus size={20} />
          </Button>
        </View>
        <Text style={styles.selectorNumber}>{character?.quantity}</Text>
        <View style={styles.quantitySelector}>
          <Button onPress={onAddCharacter}>
            <Plus size={20} />
          </Button>
        </View>
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.priceText}>${totalPrice}</Text>
      </View>
      <Button
        onPress={onRemoveAllCharacters}
        variant="transparent"
        style={styles.remove}>
        <Text>Remove</Text>
        <Trash color="red" size={20} />
      </Button>
    </View>
  );
};
