import { View } from 'react-native';
import { Text } from '../../../../components/UI/Text/Text';
import { useSelector } from 'react-redux';
import { Store } from '../../../../store';
import { SmileySad } from 'phosphor-react-native';
import { Button } from '../../../../components/UI/Button/Button';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

export const CartEmptyState = () => {
  const { goBack } = useNavigation();
  const cartStore = useSelector((store: Store) => store.cartReducer);

  if (cartStore.data.length !== 0) {
    return null;
  }

  return (
    <View style={styles.cartEmptyStateContainer}>
      <Text>Empty State</Text>
      <SmileySad />
      <Button onPress={() => goBack()}>
        <Text>Go back and bring something</Text>
      </Button>
    </View>
  );
};
