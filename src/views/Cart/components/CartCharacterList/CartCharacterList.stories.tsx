import { Meta } from '@storybook/react-native';
import { CartCharacterList } from './CartCharacterList';

const CharacterListMeta: Meta = {
  component: CartCharacterList,
  title: 'View/Cart',
};

export const CharacterList = () => {
  return <CartCharacterList />;
};

export default CharacterListMeta;
