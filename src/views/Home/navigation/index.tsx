import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../Home';
import { HOME_STACK } from './constants';

const Stack = createNativeStackNavigator();

export const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen component={Home} name={HOME_STACK.HOME} />
    </Stack.Navigator>
  );
};
