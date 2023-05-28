import { ActivityIndicator, View } from 'react-native';
import { Text } from '../../../../../../components/UI/Text/Text';
import { useSelector } from 'react-redux';
import { Store } from '../../../../../../store';

export interface ListFooterComponent {
  currentPage: number;
}

export const ListFooter = ({ currentPage }: ListFooterComponent) => {
  const { info } = useSelector(({ homeReducer }: Store) => homeReducer);

  return currentPage === info.pages ? (
    <View>
      <Text>no more data to display</Text>
    </View>
  ) : (
    <ActivityIndicator size="large" />
  );
};
