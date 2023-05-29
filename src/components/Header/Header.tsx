import { ReactNode } from 'react';
import { View } from 'react-native';
import { ShoppingCart } from 'phosphor-react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import { Button } from '../UI/Button/Button';
import { Store } from '../../store';
import { PRIVATE_STACK } from '../../navigation/private/constants';
import { NAVIGATOR_STACK } from '../../navigation/constants';

import stlyles from './stlyles';

export interface HeaderProps {
  renderItem?: ReactNode;
}

export const Header = ({ renderItem }: HeaderProps) => {
  const { characters } = useSelector((store: Store) => store.cartReducer);
  const { navigate } = useNavigation();

  return (
    <View style={stlyles.headerContainer}>
      <View>{renderItem}</View>
      <Button
        onPress={() =>
          navigate(
            NAVIGATOR_STACK.PRIVATE as never,
            {
              screen: PRIVATE_STACK.CART,
            } as never,
          )
        }>
        <View>
          <ShoppingCart />
          {characters.length === 0 ? null : <View style={stlyles.cartRedDot} />}
        </View>
      </Button>
    </View>
  );
};
