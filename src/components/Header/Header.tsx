import { ReactNode } from 'react';
import { View } from 'react-native';
import { ShoppingCart } from 'phosphor-react-native';
import { Button } from '../UI/Button/Button';
import { useSelector } from 'react-redux';
import { Store } from '../../store';
import { useNavigation } from '@react-navigation/native';
import { HOME_STACK } from '../../views/Home/navigation/constants';
import stlyles from './stlyles';
export interface HeaderProps {
  renderItem?: ReactNode;
}

export const Header = ({ renderItem }: HeaderProps) => {
  const { data } = useSelector((store: Store) => store.cartReducer);
  const { navigate } = useNavigation();

  return (
    <View style={stlyles.headerContainer}>
      <View>{renderItem}</View>
      <Button onPress={() => navigate(HOME_STACK.CART as never)}>
        <View>
          <ShoppingCart />
          {data.length === 0 ? null : <View style={stlyles.cartRedDot} />}
        </View>
      </Button>
    </View>
  );
};
