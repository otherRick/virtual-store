import { Meta } from '@storybook/react-native';
import { Character } from './Character';
import CharacterData from '../../../../../../mocks/Character.json';

const CharacterMeta: Meta = {
  component: Character,
  title: 'View/Home',
};

export const DefaultCharacter = () => {
  return <Character character={CharacterData} />;
};

export default CharacterMeta;
