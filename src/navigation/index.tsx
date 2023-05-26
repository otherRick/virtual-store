import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PrivateNavigator } from './private';

const Stack = createNativeStackNavigator();

export const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen component={PrivateNavigator} name="private" />
    </Stack.Navigator>
  );
};
