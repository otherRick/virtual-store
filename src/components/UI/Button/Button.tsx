import { RectButton } from 'react-native-gesture-handler';
import { Text } from '../Text/Text';
import { ReactNode } from 'react';
import { StyleProp, ViewStyle } from 'react-native/types';

export interface ButtonProps {
  children?: ReactNode;
  variant?: 'default' | 'transparent';
  title?: string;
  style?: StyleProp<ViewStyle>;
}

export const Button = ({
  title,
  children,
  variant = 'default',
  style,
}: ButtonProps) => {
  return (
    <RectButton style={variant === 'transparent' ? style : {}}>
      {title ? <Text>{title}</Text> : children}
    </RectButton>
  );
};
