import { FlatList } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';
import { Car } from '../../shared/types';

export const Container = styled.View`
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
    margin-bottom: 16px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.family.inter.bold};
    font-size: ${RFValue(30)}px;
    color: ${theme.colors.gray_200};
  `}
`;

export const Content = styled.View`
  width: 100%;
  flex: 1;
  padding: 0 16px;
`;

export const CardList = styled(FlatList as new () => FlatList<Car>).attrs({
  showsVerticalScrollIndicator: false
})``;

export const FloatButton = styled.TouchableOpacity`
  ${({ theme }) => css`
    width: 60px;
    height: 60px;
    border-radius: 30px;
    background-color: ${theme.colors.red_main};
    position: absolute;
    bottom: 30px;
    right: 30px;
    justify-content: center;
    align-items: center;
    z-index: 5;
  `}
`;
