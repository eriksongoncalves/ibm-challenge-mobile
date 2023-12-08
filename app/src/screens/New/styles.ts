import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

export const Container = styled.ScrollView`
  ${({ theme }) => css`
    flex-grow: 1;
    width: 100%;
    background-color: ${theme.colors.gray_200};
  `}
`;

export const Header = styled.View`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.black};
    padding: 20px;
    padding-top: ${getStatusBarHeight() + 30}px;
    flex-direction: row;
    align-items: center;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.family.inter.bold};
    font-size: ${RFValue(30)}px;
    color: ${theme.colors.gray_200};
    margin-left: 15px;
  `}
`;

export const Form = styled.View`
  width: 100%;
  padding: 16px;
`;

export const PhotoButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin: 10px 0;
  margin-bottom: 40px;
`;

export const PhotoButtonText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.family.inter.bold};
    font-size: ${RFValue(20)}px;
    color: ${theme.colors.gray_400};
    margin-left: 10px;
  `}
`;

export const CurrencyInput = styled.TextInput``;
