import React, { useState } from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useTheme } from 'styled-components';
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  interpolate
} from 'react-native-reanimated';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import * as S from './styles';
import {
  BackButton,
  Button,
  ImageSlider,
  SendMessageModal
} from '../../components';
import { Car } from '../../shared/types';
import { formatPrice } from '../../shared/utils';

type RouteParams = {
  car: Car;
};

function Detail() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const route = useRoute();
  const navigation = useNavigation();
  const theme = useTheme();
  const { car } = route.params as RouteParams;

  const scrollY = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler(event => {
    scrollY.value = event.contentOffset.y;
  });

  const sliderCarAnimation = useAnimatedStyle(() => ({
    opacity: interpolate(scrollY.value, [0, 150], [1, 0])
  }));

  function handleBack() {
    navigation.goBack();
  }

  function handleCloseModal() {
    setIsModalVisible(false);
  }

  function handleShowModal() {
    setIsModalVisible(true);
  }

  return (
    <S.Container>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <S.Header>
        <BackButton color="dark" onPress={handleBack} />
      </S.Header>

      <Animated.View
        style={[styles.header, { backgroundColor: theme.colors.white }]}
      >
        <Animated.View style={[sliderCarAnimation]}>
          <S.CardImages>
            <ImageSlider imagesUrl={car.photos} />
          </S.CardImages>
        </Animated.View>
      </Animated.View>

      <Animated.ScrollView
        contentContainerStyle={{
          padding: 24,
          paddingTop: getStatusBarHeight() + 280
        }}
        showsVerticalScrollIndicator={false}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
      >
        <S.Details>
          <S.Description>
            <S.Brand>{car.brand}</S.Brand>
            <S.Model>{car.model}</S.Model>
          </S.Description>
          <S.Price>{formatPrice(car.value)}</S.Price>
        </S.Details>

        <S.InfoContainer>
          <S.InfoText>
            <S.Label>Ano</S.Label>
            <S.Text>{car.year}</S.Text>
          </S.InfoText>

          <S.InfoText style={{ marginLeft: 12 }}>
            <S.Label>Cidade</S.Label>
            <S.Text>{car.city}</S.Text>
          </S.InfoText>
        </S.InfoContainer>
      </Animated.ScrollView>

      <S.Footer>
        <Button title="Enviar uma mensagem" onPress={handleShowModal} />
      </S.Footer>

      <SendMessageModal visible={isModalVisible} onClose={handleCloseModal} />
    </S.Container>
  );
}

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    zIndex: 1,
    overflow: 'hidden'
  }
});

export default Detail;
