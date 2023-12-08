import React from 'react';
import { Image } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';

import * as S from './styles';
import { Car } from '../../shared/types';
import { getImageUrl, formatPrice } from '../../shared/utils';

type CardCarProps = {
  data: Car;
} & RectButtonProps;

export function CardCar({ data, ...rest }: CardCarProps) {
  return (
    <S.Container {...rest}>
      <S.Detail>
        <S.Brand>{data.brand}</S.Brand>
        <S.Model>{data.model}</S.Model>

        <S.Price>{formatPrice(data.value)}</S.Price>
      </S.Detail>

      <Image
        source={{ uri: getImageUrl(data.photos[0]) }}
        width={200}
        height={130}
      />
    </S.Container>
  );
}
