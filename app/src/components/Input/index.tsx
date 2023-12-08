/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components';
import { Feather } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Control, Controller } from 'react-hook-form';

import * as S from './styles';

type InputProps = {
  name: string;
  control: Control<any>;
  iconName?: React.ComponentProps<typeof Feather>['name'];
  isPasswordInput?: boolean;
  value?: string;
  error?: string;
  style?: any;
} & TextInputProps;

export function Input({
  name,
  control,
  iconName,
  isPasswordInput = false,
  value,
  error,
  style = {},
  ...rest
}: InputProps) {
  const theme = useTheme();
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  function handleVisiblePassword() {
    setIsPasswordVisible(oldValue => !oldValue);
  }

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!value);
  }

  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange } }) => {
          return (
            <S.Container>
              {iconName && (
                <S.IconContainer isFocused={isFocused || isFilled}>
                  <Feather
                    name={iconName}
                    size={24}
                    color={
                      isFocused || isFilled
                        ? theme.colors.red_main
                        : theme.colors.gray_400
                    }
                  />
                </S.IconContainer>
              )}

              <S.InputText
                {...rest}
                hasIcon={!!iconName}
                secureTextEntry={isPasswordInput && isPasswordVisible}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                isFocused={isFocused || isFilled}
                onChangeText={onChange}
                style={{ ...style }}
              />

              {isPasswordInput && (
                <BorderlessButton onPress={handleVisiblePassword}>
                  <S.IconContainer isFocused={isFocused || isFilled}>
                    <Feather
                      name={isPasswordVisible ? 'eye' : 'eye-off'}
                      size={24}
                      color={theme.colors.gray_400}
                    />
                  </S.IconContainer>
                </BorderlessButton>
              )}
            </S.Container>
          );
        }}
      />

      {!!error && <S.Error>{error}</S.Error>}
    </>
  );
}
