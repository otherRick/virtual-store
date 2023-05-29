import { render } from '@testing-library/react-native';
import { PrivateNavigator } from '.';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from '../../store';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

describe('PrivateNavigator', () => {
  it('renders without errors', () => {
    expect(() => {
      render(
        <Provider store={store}>
          <NavigationContainer>
            <GestureHandlerRootView>
              <PrivateNavigator />
            </GestureHandlerRootView>
          </NavigationContainer>
        </Provider>,
      );
    }).not.toThrow();
  });
});
