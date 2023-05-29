import { Coins } from 'phosphor-react-native';
import { Text } from '../Text/Text';
import { Button } from './Button';

const ButtonMeta = {
  title: 'Components',
  component: Button,
};

export const WithText = () => {
  return (
    <Button>
      <Text>Text Example</Text>
    </Button>
  );
};

export const WithIcon = () => {
  return (
    <Button>
      <Coins />
    </Button>
  );
};

export default ButtonMeta;
