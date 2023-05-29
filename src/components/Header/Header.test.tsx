import { render } from '@testing-library/react-native';
import { Header } from './Header';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from '../../store';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
describe('test', () => {
  test('a', () => {
    render(
      <Provider store={store}>
        <GestureHandlerRootView>
          <NavigationContainer>
            <Header />
          </NavigationContainer>
        </GestureHandlerRootView>
      </Provider>,
    );
    expect(0).toBe(0);
  });
});
