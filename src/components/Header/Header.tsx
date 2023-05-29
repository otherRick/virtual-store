import { ReactNode } from 'react';
import { View } from 'react-native';
import { ShoppingCart } from 'phosphor-react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import { Button } from '../UI/Button/Button';
import { Store } from '../../store';
import { PRIVATE_STACK } from '../../navigation/private/constants';

import stlyles from './stlyles';

export interface HeaderProps {
  renderItem?: ReactNode;
}

export const Header = ({ renderItem }: HeaderProps) => {
  const { characters } = useSelector((store: Store) => store.cartReducer);
  const { navigate } = useNavigation();

  return (
    <View testID="header-component" style={stlyles.headerContainer}>
      <View>{renderItem}</View>
      <Button
        testID="header-cart-button"
        onPress={() => navigate(PRIVATE_STACK.CART as never)}>
        <View>
          <ShoppingCart />
          {characters.length === 0 ? null : (
            <View testID="cart-red-dot" style={stlyles.cartRedDot} />
          )}
        </View>
      </Button>
    </View>
  );
};
