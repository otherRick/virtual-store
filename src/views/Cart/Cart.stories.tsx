import { Meta } from '@storybook/react-native';
import { Cart } from './Cart';

const CartMeta: Meta = {
  component: Cart,
  title: 'View/Cart',
};

export const Default = () => {
  return <Cart />;
};

export default CartMeta;
