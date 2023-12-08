/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { ActivityIndicator } from 'react-native';

import * as S from './styles';

type ButtonProps = {
  title: string;
  color?: string;
  loading?: boolean;
  light?: boolean;
} & RectButtonProps;

export function Button({
  color,
  title,
  loading,
  light = false,
  ...rest
}: ButtonProps) {
  return (
    <S.Container
      {...rest}
      color={color}
      style={{
        opacity: loading ? 0.5 : 1
      }}
    >
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <S.Title light={light}>{title}</S.Title>
      )}
    </S.Container>
  );
}
