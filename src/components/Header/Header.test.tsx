import { render } from '@testing-library/react-native';
import { Header } from './Header';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from '../../store';
describe('test', () => {
  test('a', () => {
    render(
      <Provider store={store}>
        <NavigationContainer>
          <Header />
        </NavigationContainer>
      </Provider>,
    );
    expect(0).toBe(0);
  });
});
