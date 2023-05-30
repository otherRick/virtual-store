import { ReactNode } from 'react';
import { View } from 'react-native';
import { ShoppingCart } from 'phosphor-react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import { Button } from '../UI/Button/Button';
import { Store } from '../../store';
import { PRIVATE_STACK } from '../../navigation/private/constants';

import stlyles from './stlyles';
import { Text } from '../UI/Text/Text';

export interface HeaderProps {
  renderItem?: ReactNode;
  title?: ReactNode;
}

export const Header = ({ renderItem, title }: HeaderProps) => {
  const { characters } = useSelector((store: Store) => store.cartReducer);
  const { navigate } = useNavigation();

  return (
    <View testID="header-component" style={stlyles.headerContainer}>
      <View>{renderItem}</View>
      <View>{title}</View>
      <Button
        testID="header-cart-button"
        onPress={() => navigate(PRIVATE_STACK.CART as never)}>
        <View>
          <ShoppingCart />
          {characters.length === 0 ? null : (
            <View testID="cart-red-dot" style={stlyles.cartRedDot}>
              <Text style={stlyles.numberOfItems}>{characters.length}</Text>
            </View>
          )}
        </View>
      </Button>
    </View>
  );
};
