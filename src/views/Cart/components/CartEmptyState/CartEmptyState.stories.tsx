import { Meta } from '@storybook/react-native';
import { CartEmptyState } from './CartEmptyState';

const CartEmptyStateMeta: Meta = {
  component: CartEmptyState,
  title: 'View/Cart',
};

export const EmptyState = () => {
  return <CartEmptyState />;
};

export default CartEmptyStateMeta;
