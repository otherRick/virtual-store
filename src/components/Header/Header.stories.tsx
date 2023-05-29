import { ArrowArcLeft } from 'phosphor-react-native';
import { Header } from './Header';

const HeaderMeta = {
  title: 'Components',
  component: Header,
};

export const DefaultHeader = () => {
  return <Header />;
};
export const WithRenderItem = () => {
  return <Header renderItem={<ArrowArcLeft />} />;
};

export default HeaderMeta;
