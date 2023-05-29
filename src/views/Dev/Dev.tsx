import { View } from 'react-native';
import { Button } from '../../components/UI/Button/Button';
import { Text } from '../../components/UI/Text/Text';
import { useNavigation } from '@react-navigation/native';
import { PUBLIC_STACK } from '../../navigation/public/constants';

export const Dev = () => {
  const { navigate } = useNavigation();

  const goToApp = () => {
    navigate(PUBLIC_STACK.PRIVATE_STACK as never);
  };

  const goToStorybook = () => {
    navigate(PUBLIC_STACK.STORYBOOK as never);
  };

  return (
    <View>
      <Button onPress={goToApp}>
        <Text>Go to App</Text>
      </Button>
      <Button onPress={goToStorybook}>
        <Text>Go To Storybook</Text>
      </Button>
    </View>
  );
};
