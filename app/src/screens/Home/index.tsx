import React, { useState, useEffect } from 'react';
import { StatusBar, View, ActivityIndicator } from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

import * as S from './styles';
import { CardCar } from '../../components';
import { Car } from '../../shared/types';
import { getCars } from '../../services/car';

function Home() {
  const navigation = useNavigation();
  const screenIsFocus = useIsFocused();
  const [cars, setCars] = useState<Car[]>([] as Car[]);
  const [loading, setLoading] = useState(true);

  function handleNavigateDetail(car: Car) {
    navigation.navigate('detail', {
      car
    });
  }

  function handleNavigateNew() {
    navigation.navigate('new');
  }

  useEffect(() => {
    // signOut();
    getCars()
      .then(data => {
        setCars(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [screenIsFocus]);

  return (
    <S.Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />

      <S.Header>
        <S.Title>Lista de carros</S.Title>
      </S.Header>

      {loading ? (
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <ActivityIndicator size={'large'} />
        </View>
      ) : (
        <S.Content>
          <S.CardList
            data={cars}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <CardCar data={item} onPress={() => handleNavigateDetail(item)} />
            )}
          />
        </S.Content>
      )}

      <S.FloatButton onPress={handleNavigateNew}>
        <AntDesign name="plus" size={24} color="white" />
      </S.FloatButton>
    </S.Container>
  );
}

export default Home;
