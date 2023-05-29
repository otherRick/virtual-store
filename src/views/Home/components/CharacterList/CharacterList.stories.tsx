import { Meta } from '@storybook/react-native';
import { CharacterList } from './CharacterList';

const CharacterListMate: Meta = {
  component: CharacterList,
  title: 'View/Home',
};

export const CharacterListDefault = () => {
  return <CharacterList />;
};

export default CharacterListMate;
