import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => css`
    padding: 0 24px;
    background-color: ${theme.colors.gray_200};
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.family.inter.bold};
    font-size: ${RFValue(40)}px;
    color: ${theme.colors.gray_600};
    margin-top: 25px;
  `}
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.family.inter.regular};
    font-size: ${RFValue(15)}px;
    color: ${theme.colors.gray_400};
    line-height: ${RFValue(25)}px;
    margin-top: 16px;
  `}
`;

export const Form = styled.View`
  width: 100%;
  margin: 64px 0;
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${getStatusBarHeight() + 25}px;
  margin-bottom: 35px;
`;
