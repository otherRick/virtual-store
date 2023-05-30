import { View } from 'react-native';
import { Header } from '../../components/Header/Header';
import { ArrowLeft } from 'phosphor-react-native';
import { CartEmptyState } from './components/CartEmptyState/CartEmptyState';
import { CartCharacterList } from './components/CartCharacterList/CartCharacterList';
import { Button } from '../../components/UI/Button/Button';
import { useNavigation } from '@react-navigation/native';
import { Text } from '../../components/UI/Text/Text';
import styles from './styles';

export const Cart = () => {
  const { goBack } = useNavigation();

  return (
    <View testID="cart-view">
      <Header
        title={<Text style={styles.title}>My Shop</Text>}
        renderItem={
          <Button onPress={() => goBack()}>
            <ArrowLeft />
          </Button>
        }
      />
      <CartEmptyState />
      <CartCharacterList />
    </View>
  );
};
