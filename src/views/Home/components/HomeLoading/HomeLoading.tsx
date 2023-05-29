import { View } from 'react-native';
import { Text } from '../../../../components/UI/Text/Text';
import { useSelector } from 'react-redux';
import { Store } from '../../../../store';

export const HomeLoading = () => {
  const {
    controls: { status },
  } = useSelector(({ homeReducer }: Store) => homeReducer);

  if (status === 'PENDING') {
    return (
      <View testID="home-loading-component">
        <Text>Loading</Text>
      </View>
    );
  }

  return null;
};
