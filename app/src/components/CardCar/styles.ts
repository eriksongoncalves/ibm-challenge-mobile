import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  ${({ theme }) => css`
    width: 100%;
    height: ${RFValue(126)}px;
    background-color: ${theme.colors.white};
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${RFValue(14)}px;
  `}
`;

export const Detail = styled.View`
  padding: ${RFValue(14)}px;
`;

export const Brand = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.family.inter.regular};
    font-size: ${RFValue(10)}px;
    color: ${theme.colors.gray_400};
    text-transform: uppercase;
  `}
`;

export const Model = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.family.inter.regular};
    font-size: ${RFValue(15)}px;
    color: ${theme.colors.gray_600};
  `}
`;

export const Price = styled.Text`
  ${({ theme }) => css`
    margin-top: ${RFValue(16)}px;
    font-family: ${theme.fonts.family.inter.bold};
    font-size: ${RFValue(15)}px;
    color: ${theme.colors.black};
    text-transform: uppercase;
  `}
`;
