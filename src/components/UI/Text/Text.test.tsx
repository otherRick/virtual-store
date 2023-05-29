import { render, screen } from '@testing-library/react-native';
import { Text } from './Text';
describe('Text', () => {
  test('should render Text with provided text', () => {
    render(<Text testID="test-text">test text</Text>);

    expect(screen.getByTestId('test-text')).toHaveTextContent('test text');
  });
});
