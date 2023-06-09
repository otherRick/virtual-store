import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { Text } from '../Text/Text';
import { ReactNode } from 'react';
import { StyleProp, ViewStyle } from 'react-native/types';
import styles from './styles';

export interface ButtonProps extends RectButtonProps {
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
  ...rest
}: ButtonProps) => {
  return (
    <RectButton
      {...rest}
      style={variant === 'transparent' ? style : styles.button}>
      {title ? <Text style={styles.text}>{title}</Text> : children}
    </RectButton>
  );
};
