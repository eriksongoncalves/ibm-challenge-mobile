import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css, DefaultTheme } from 'styled-components/native';
import { TextInput } from 'react-native';

type FocusedProps = {
  isFocused: boolean;
};

type InputTextProps = FocusedProps & {
  hasIcon: boolean;
};

const modifiers = {
  focused: (theme: DefaultTheme) => css`
    border-bottom-width: 2px;
    border-bottom-color: ${theme.colors.red_main};
  `,
  withoutIcon: () => css`
    padding: 12px;
  `
};

export const Container = styled.View`
  flex-direction: row;
  margin-bottom: 8px;
`;

export const IconContainer = styled.View<FocusedProps>`
  ${({ theme, isFocused }) => css`
    height: 56px;
    width: 56px;
    justify-content: center;
    align-items: center;
    margin-right: 2px;
    background-color: ${theme.colors.white};

    ${isFocused && modifiers.focused(theme)}
  `}
`;

export const InputText = styled(TextInput)<InputTextProps>`
  ${({ theme, isFocused, hasIcon }) => css`
    flex: 1;
    background-color: ${theme.colors.white};
    color: ${theme.colors.gray_400};
    font-family: ${theme.fonts.family.inter.regular};
    font-size: ${RFValue(15)}px;
    padding: 0 23px;

    ${isFocused && modifiers.focused(theme)}
    ${!hasIcon && modifiers.withoutIcon()}
  `}
`;

export const Error = styled.Text`
  ${({ theme }) => css`
    font-size: 14px;
    font-family: ${theme.fonts.family.inter.regular};
    color: ${theme.colors.red_main};
    margin-top: -4px;
    margin-bottom: 14px;
  `}
`;
