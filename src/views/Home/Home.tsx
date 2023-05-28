import { View } from 'react-native';

import { Header } from '../../components/Header/Header';
import { HomeLoading } from './components/HomeLoading/HomeLoading';
import { HomeError } from './components/HomeError/HomeError';
import { CharacterList } from './components/CharacterList/CharacterList';

import styles from './styles';

export const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <HomeLoading />
      <HomeError />
      <CharacterList />
    </View>
  );
};
