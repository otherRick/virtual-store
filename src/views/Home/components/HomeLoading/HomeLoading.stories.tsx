import { Meta } from '@storybook/react-native';
import { HomeLoading } from './HomeLoading';

const HomeLoadingMeta: Meta = {
  component: HomeLoading,
  title: 'View/Home',
};

export const DefaultLoading = () => {
  return <HomeLoading />;
};

export default HomeLoadingMeta;
