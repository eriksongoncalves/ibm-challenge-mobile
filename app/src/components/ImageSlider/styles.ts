import styled from 'styled-components/native';
import { Dimensions, Image } from 'react-native';

export const Container = styled.View``;

export const CardImageWrapper = styled.View`
  width: ${Dimensions.get('window').width}px;
  height: 250px;
  justify-content: center;
  align-items: center;
`;

export const CardImage = styled(Image)`
  width: ${Dimensions.get('window').width}px;
  height: 250px;
`;
