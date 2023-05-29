import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { store } from '../src/store';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../src/views/Home/Home';
import { Cart } from '../src/views/Cart/Cart';
import { PRIVATE_STACK } from '../src/navigation/private/constants';

const Stack = createNativeStackNavigator();

export const Wrapper = () => {
  return (
    <Provider store={store}>
      <GestureHandlerRootView>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen component={Home} name={PRIVATE_STACK.HOME} />
            <Stack.Screen component={Cart} name={PRIVATE_STACK.CART} />
          </Stack.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
    </Provider>
  );
};
