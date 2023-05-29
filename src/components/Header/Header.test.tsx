import { fireEvent, render, screen } from '@testing-library/react-native';
import { Wrapper } from '../../../jest/Wrapper';

// jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

describe('Header', () => {
  beforeEach(() => {
    render(<Wrapper />);
  });

  test('should navigate to cart-view when cart icon is pressed', async () => {
    expect(screen.queryByTestId('cart-view')).not.toBeOnTheScreen();
    expect(screen.getByTestId('header-component')).toBeOnTheScreen();

    fireEvent(screen.getByTestId('header-cart-button'), 'press');

    expect(await screen.findByTestId('cart-view')).toBeOnTheScreen();
  });

  test('should display red indicator when an item is added to cart', async () => {
    const addCharactersButton = await screen.findAllByTestId(
      'home-addCharacter-button',
    );

    expect(screen.queryByTestId('cart-red-dot')).not.toBeOnTheScreen();

    fireEvent(addCharactersButton[0], 'press');

    expect(screen.getByTestId('cart-red-dot')).toBeOnTheScreen();
  });
});
