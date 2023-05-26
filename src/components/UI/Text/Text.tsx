import { Text as RNText, TextProps as RNTextProps } from 'react-native';

export interface TextProps extends RNTextProps {}

export const Text = ({ children, ...rest }: TextProps) => {
  return <RNText {...rest}>{children}</RNText>;
};
