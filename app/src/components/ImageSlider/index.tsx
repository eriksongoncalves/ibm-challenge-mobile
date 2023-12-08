import React, { useRef } from 'react';

import * as S from './styles';
import { FlatList } from 'react-native';
import { getImageUrl } from '../../shared/utils';

export type ImageSliderProps = {
  imagesUrl: string[];
};

export function ImageSlider({ imagesUrl }: ImageSliderProps) {
  const indexChanged = useRef();

  return (
    <S.Container>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        data={imagesUrl}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <S.CardImageWrapper>
            <S.CardImage
              source={{ uri: getImageUrl(item) }}
              style={{ resizeMode: 'cover' }}
            />
          </S.CardImageWrapper>
        )}
        onViewableItemsChanged={indexChanged.current}
      />
    </S.Container>
  );
}
