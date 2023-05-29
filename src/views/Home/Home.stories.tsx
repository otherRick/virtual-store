import { Meta } from '@storybook/react-native';
import { Home } from './Home';

const HomeMeta: Meta = {
  component: Home,
  title: 'View/Home',
};

export const Default = () => {
  return <Home />;
};

export default HomeMeta;
