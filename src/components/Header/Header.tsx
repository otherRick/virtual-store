import { ReactNode } from 'react';
import { View } from 'react-native';
import { ShoppingCart } from 'phosphor-react-native';
import { Button } from '../UI/Button/Button';
import { useSelector } from 'react-redux';
import { Store } from '../../store';
export interface HeaderProps {
  renderItem?: ReactNode;
}

export const Header = ({ renderItem }: HeaderProps) => {
  const { data } = useSelector((store: Store) => store.cartReducer);

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
        <View>
          <ShoppingCart />
          {data.length === 0 ? null : (
            <View
              style={{
                position: 'absolute',
                backgroundColor: 'red',
                width: 10,
                height: 10,
                borderRadius: 100,
                top: 0,
                right: 0,
              }}
            />
          )}
        </View>
      </Button>
    </View>
  );
};
