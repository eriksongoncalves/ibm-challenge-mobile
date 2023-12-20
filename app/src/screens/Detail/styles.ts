import styled, { css } from 'styled-components/native';
import {
  getStatusBarHeight,
  getBottomSpace
} from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.white};
  `}
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  margin-top: ${getStatusBarHeight() + 18}px;
  margin-left: 10px;
  z-index: 2;
`;

export const CardImages = styled.View`
  margin-top: ${getStatusBarHeight() + 60}px;
`;

export const Details = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 40px;
`;

export const Description = styled.View``;

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
    font-size: ${RFValue(20)}px;
    color: ${theme.colors.gray_600};
    margin-top: -8px;
  `}
`;

export const Price = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.family.inter.regular};
    font-size: ${RFValue(20)}px;
    color: ${theme.colors.red_main};
    margin-top: 8px;
  `}
`;

export const InfoContainer = styled.View`
  margin-top: 22px;
  flex-direction: row;
`;

export const InfoText = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.gray_200};
    padding: 10px 18px;
  `}
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.family.inter.regular};
    font-size: ${RFValue(18)}px;
    color: ${theme.colors.black};
  `}
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.family.inter.regular};
    font-size: ${RFValue(12)}px;
    color: ${theme.colors.gray_400};
  `}
`;

export const Footer = styled.View`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.white};
    padding: 24px 24px ${getBottomSpace() + 24}px;
  `}
`;
