import { ReactNode } from 'react';
import { View } from 'react-native';
import { ShoppingCart } from 'phosphor-react-native';
import { Button } from '../UI/Button/Button';
export interface HeaderProps {
  renderItem?: ReactNode;
}

export const Header = ({ renderItem }: HeaderProps) => {
  return (
    <View
      style={{
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        padding: 16,
      }}>
      <View style={{ flex: 1 }}>{renderItem}</View>
      <Button>
        <ShoppingCart />
      </Button>
    </View>
  );
};
