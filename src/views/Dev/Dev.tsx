import { View } from 'react-native';
import { Button } from '../../components/UI/Button/Button';
import { useNavigation } from '@react-navigation/native';
import { PUBLIC_STACK } from '../../navigation/public/constants';
import { NAVIGATOR_STACK } from '../../navigation/constants';
import styles from './styles';

export const Dev = () => {
  const { navigate } = useNavigation();

  const goToApp = () => {
    navigate(NAVIGATOR_STACK.PRIVATE as never);
  };

  const goToStorybook = () => {
    navigate(PUBLIC_STACK.STORYBOOK as never);
  };

  return (
    <View style={styles.container}>
      <Button title="Go to App" onPress={goToApp} />

      <Button title="Go to Storybook" onPress={goToStorybook} />
    </View>
  );
};
