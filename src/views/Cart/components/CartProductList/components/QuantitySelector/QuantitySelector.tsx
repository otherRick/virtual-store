import { Minus, Plus, Trash } from 'phosphor-react-native';
import { View } from 'react-native';
import { Text } from '../../../../../../components/UI/Text/Text';
import { Button } from '../../../../../../components/UI/Button/Button';
import { useAsyncDispatch } from '../../../../../../hooks/useAsyncDispatch';
import {
  InicialStateData,
  addProduct,
  removeProductQuantity,
} from '../../../../slice/cartSlice';
import { romoveProducts } from '../../../../slice/cartSlice';
import styles from './styles';

export interface QuantitySelectorProps {
  productData: InicialStateData;
}

export const QuantitySelector = ({ productData }: QuantitySelectorProps) => {
  const dispatch = useAsyncDispatch();
  const onRemove = () => {
    dispatch(removeProductQuantity(productData));
  };
  const onAdd = () => {
    dispatch(addProduct(productData));
  };

  const onRemoveProductPress = () => {
    dispatch(romoveProducts(productData));
  };
  return (
    <View>
      <View style={styles.container}>
        <Button onPress={onRemove}>
          <Minus size={20} />
        </Button>
        <Text>{productData.quantity}</Text>
        <Button onPress={onAdd}>
          <Plus size={20} />
        </Button>
      </View>
      <Button
        onPress={onRemoveProductPress}
        variant="transparent"
        style={styles.remove}>
        <Text>Remove</Text>
        <Trash />
      </Button>
    </View>
  );
};
