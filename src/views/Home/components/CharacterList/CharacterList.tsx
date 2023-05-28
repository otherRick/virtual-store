import { useSelector } from 'react-redux';
import { FlatList } from 'react-native';

import { Store } from '../../../../store';
import { useAsyncDispatch } from '../../../../hooks/useAsyncDispatch';
import { getCharactersThunk } from '../../slice/homeSlice';
import { ListFooter } from './components/ListFooter/ListFooter';
import { useEffect, useState } from 'react';
import { Character } from './components/Character/Character';

import styles from './styles';

export const CharacterList = () => {
  const { charaters } = useSelector(({ homeReducer }: Store) => homeReducer);
  const [page, setPage] = useState(0);
  const dispatch = useAsyncDispatch();

  const renderNextPage = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    dispatch(getCharactersThunk({ page }));
  }, [dispatch, page]);

  if (!charaters) {
    return null;
  }

  return (
    <FlatList
      ListFooterComponent={<ListFooter currentPage={page} />}
      contentContainerStyle={styles.container}
      showsHorizontalScrollIndicator={false}
      onEndReachedThreshold={0.6}
      keyExtractor={() => Math.random().toString()}
      onEndReached={renderNextPage}
      data={charaters}
      renderItem={({ item }) => <Character character={item} />}
    />
  );
};
