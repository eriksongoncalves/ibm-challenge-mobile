import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

type ContainerProps = {
  color?: string;
};

type TitleProps = {
  light?: boolean;
};

export const Container = styled(RectButton)<ContainerProps>`
  ${({ theme, color }) => css`
    width: 100%;

    padding: 19px;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.red_main};
    margin-bottom: 8px;

    ${!!color &&
    css`
      background-color: ${color};
    `}
  `}
`;

export const Title = styled.Text<TitleProps>`
  ${({ theme, light }) => css`
    font-family: ${theme.fonts.family.inter.bold};
    font-size: ${RFValue(15)}px;
    color: ${theme.colors.white};

    ${light &&
    css`
      color: ${theme.colors.gray_400};
    `}
  `}
`;
