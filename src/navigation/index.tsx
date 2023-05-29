import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PrivateNavigator } from './private';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PublicNavigator } from './public';
import { NAVIGATOR_STACK } from './constants';

const Stack = createNativeStackNavigator();

export const Navigator = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          component={PublicNavigator}
          name={NAVIGATOR_STACK.PUBLIC}
        />
        <Stack.Screen
          component={PrivateNavigator}
          name={NAVIGATOR_STACK.PRIVATE}
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
};
