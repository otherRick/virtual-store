import { Alert, Image, ScrollView, View } from 'react-native';
import { Text } from '../../../../components/UI/Text/Text';
import { useSelector } from 'react-redux';
import { Store } from '../../../../store';
import { Trash } from 'phosphor-react-native';
import { QuantitySelector } from './components/QuantitySelector/QuantitySelector';
import { Button } from '../../../../components/UI/Button/Button';
import { useAsyncDispatch } from '../../../../hooks/useAsyncDispatch';
import { removeAllProdcuts } from '../../slice/cartSlice';
import styles from './styles';

export const CartProductList = () => {
  const cartStore = useSelector((store: Store) => store.cartReducer);
  const dispatch = useAsyncDispatch();

  if (cartStore.data.length === 0) {
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
          onPress: () => dispatch(removeAllProdcuts()),
          text: 'Confirm',
        },
      ],
    );
  };

  return (
    <ScrollView>
      <Text>My list</Text>
      {cartStore.data.map(data => (
        <View key={data.countryId} style={styles.list}>
          <Image
            source={{ uri: data.countryFlag.image, width: 100 }}
            alt={data.countryFlag.alt}
            resizeMode="contain"
          />
          <Text>{data.countryName}</Text>
          <QuantitySelector productData={data} />
        </View>
      ))}
      <Button onPress={onRemoveAllPress}>
        <Text>Remove All Items</Text>
        <Trash />
      </Button>
    </ScrollView>
  );
};
