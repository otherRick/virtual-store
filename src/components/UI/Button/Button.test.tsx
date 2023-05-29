import { render, screen } from '@testing-library/react-native';
import { Button } from './Button';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

describe('Button', () => {
  test('should render title when prop title is provided', () => {
    render(
      <GestureHandlerRootView>
        <Button testID="test-button" title="test title" />
      </GestureHandlerRootView>,
    );

    expect(screen.getByTestId('test-button')).toHaveTextContent('test title');
  });
});
