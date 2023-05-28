import { View } from 'react-native';
import { Header } from '../../components/Header/Header';
import { ArrowLeft, Trash } from 'phosphor-react-native';
import { CartEmptyState } from './components/CartEmptyState/CartEmptyState';
import { CartProductList } from './components/CartProductList/CartProductList';
import { Button } from '../../components/UI/Button/Button';
import { useNavigation } from '@react-navigation/native';
import { Text } from '../../components/UI/Text/Text';

export const Cart = () => {
  const { goBack } = useNavigation();
  return (
    <View>
      <Header
        renderItem={
          <Button onPress={() => goBack()}>
            <ArrowLeft />
          </Button>
        }
      />
      <CartEmptyState />
      <CartProductList />
    </View>
  );
};
