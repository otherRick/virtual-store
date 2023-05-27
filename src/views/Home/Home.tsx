import { View } from 'react-native';
import { useEffect } from 'react';

import { getAllCountriesThunk } from './slice/homeSlice';
import { Header } from '../../components/Header/Header';
import { useAsyncDispatch } from '../../hooks/useAsyncDispatch';
import { HomeLoading } from './components/HomeLoading/HomeLoading';
import { HomeError } from './components/HomeError/HomeError';
import { ProductList } from './components/ProductList/ProductList';

export const Home = () => {
  const dispatch = useAsyncDispatch();

  useEffect(() => {
    dispatch(getAllCountriesThunk());
  }, [dispatch]);

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <HomeLoading />
      <HomeError />
      <ProductList />
    </View>
  );
};
