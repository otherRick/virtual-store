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
  return (
    <View>
      <View style={styles.container}>
        <Button onPress={onRemoveCharacter}>
          <Minus size={20} />
        </Button>
        <Text>{character.quantity}</Text>
        <Button onPress={onAddCharacter}>
          <Plus size={20} />
        </Button>
      </View>
      <Button
        onPress={onRemoveAllCharacters}
        variant="transparent"
        style={styles.remove}>
        <Text>Remove</Text>
        <Trash />
      </Button>
    </View>
  );
};
