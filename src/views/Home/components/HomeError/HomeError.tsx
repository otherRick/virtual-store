import { View } from 'react-native';
import { Text } from '../../../../components/UI/Text/Text';
import { useSelector } from 'react-redux';
import { Store } from '../../../../store';

export const HomeError = () => {
  const {
    controls: { status },
  } = useSelector(({ homeReducer }: Store) => homeReducer);

  if (status !== 'REJECTED') {
    return null;
  }

  return (
    <View>
      <Text>Error</Text>
    </View>
  );
};
