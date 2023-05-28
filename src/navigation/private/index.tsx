import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeStackNavigator } from '../../views/Home/navigation';
import { PRIVATE_STACK } from './constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from '../../components/Header/Header';

const Stack = createNativeStackNavigator();

export const PrivateNavigator = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          component={HomeStackNavigator}
          name={PRIVATE_STACK.HOME}
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
};
