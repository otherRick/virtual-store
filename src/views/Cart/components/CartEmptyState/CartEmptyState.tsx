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

  if (cartStore.characters.length !== 0) {
    return null;
  }

  return (
    <View style={styles.cartEmptyStateContainer}>
      <Text style={styles.emptyStateText}>No items!</Text>
      <SmileySad style={styles.smileyIcon} size={50} />
      <Button onPress={() => goBack()}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Go back and bring something</Text>
        </View>
      </Button>
    </View>
  );
};
