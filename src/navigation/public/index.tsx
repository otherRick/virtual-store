import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PUBLIC_STACK } from './constants';
import Storybook from '../../../.storybook';
import { Dev } from '../../views/Dev/Dev';

const Stack = createNativeStackNavigator();

export const PublicNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen component={Dev} name={PUBLIC_STACK.DEV} />
      <Stack.Screen component={Storybook} name={PUBLIC_STACK.STORYBOOK} />
    </Stack.Navigator>
  );
};
