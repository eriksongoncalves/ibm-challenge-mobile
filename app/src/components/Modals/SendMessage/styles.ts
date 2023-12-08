import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

export const Wrapper = styled.View`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 20px;
`;

export const ModalContent = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.gray_200};
    width: 95%;
    border-radius: 8px;
    padding: 20px 15px;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.family.inter.bold};
    font-size: ${RFValue(15)}px;
    margin-bottom: 20px;
  `}
`;
