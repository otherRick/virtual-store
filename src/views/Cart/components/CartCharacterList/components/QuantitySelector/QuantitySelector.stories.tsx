import { Meta } from '@storybook/react-native';
import { QuantitySelector } from './QuantitySelector';

const QuantitySelectorMeta: Meta = {
  component: QuantitySelector,
  title: 'View/Cart/Components',
};

export const CharacterList = () => {
  return <QuantitySelector />;
};

export default QuantitySelectorMeta;
