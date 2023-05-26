import { RectButton } from 'react-native-gesture-handler';
import { Text } from '../Text/Text';
import { ReactNode } from 'react';

export interface ButtonProps {
  children?: ReactNode;
  variant?: 'default' | 'transparent';
  title?: string;
}

export const Button = ({
  title,
  children,
  variant = 'default',
}: ButtonProps) => {
  return (
    <RectButton style={variant === 'transparent' ? undefined : {}}>
      {title ? <Text>{title}</Text> : children}
    </RectButton>
  );
};
