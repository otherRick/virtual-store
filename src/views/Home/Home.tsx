import { View } from 'react-native';

import { Header } from '../../components/Header/Header';
import { HomeLoading } from './components/HomeLoading/HomeLoading';
import { HomeError } from './components/HomeError/HomeError';
import { CharacterList } from './components/CharacterList/CharacterList';

import styles from './styles';
import { Text } from '../../components/UI/Text/Text';

export const Home = () => {
  return (
    <View style={styles.container}>
      <Header
        renderItem={<Text style={styles.headerTitle}>Virtual Store</Text>}
      />
      <HomeLoading />
      <HomeError />
      <CharacterList />
    </View>
  );
};
