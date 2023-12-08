import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { BorderlessButtonProps } from 'react-native-gesture-handler';

import * as S from './styles';

type BackButtonProps = {
  color?: 'light' | 'dark';
} & BorderlessButtonProps;

export function BackButton({ color = 'light', ...rest }: BackButtonProps) {
  const theme = useTheme();
  const themeColor = color === 'light' ? 'white' : 'gray_400';

  return (
    <S.Container {...rest}>
      <MaterialIcons
        name="chevron-left"
        size={30}
        color={theme.colors[themeColor]}
      />
    </S.Container>
  );
}
