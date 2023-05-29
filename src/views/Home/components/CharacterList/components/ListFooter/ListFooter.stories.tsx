import { Args, Meta } from '@storybook/react-native';
import { ListFooter } from './ListFooter';

const ListFooterMeta: Meta = {
  component: ListFooter,
  title: 'View/Home',
};

export const DefaultListFooter = (args: Args) => {
  return <ListFooter currentPage={args.display === 'loading' ? 1 : 0} />;
};

DefaultListFooter.argTypes = {
  display: {
    options: ['loading', 'no content'],
    control: { type: 'radio' },
  },
};

export default ListFooterMeta;
