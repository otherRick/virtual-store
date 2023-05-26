import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeStackNavigator } from '../../views/Home/navigation';
import { PRIVATE_STACK } from './constants';

const Stack = createNativeStackNavigator();

export const PrivateNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen component={HomeStackNavigator} name={PRIVATE_STACK.HOME} />
    </Stack.Navigator>
  );
};
