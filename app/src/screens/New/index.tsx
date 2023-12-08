/* eslint-disable no-console */
import React, { useState } from 'react';
import {
  StatusBar,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';
import CurrencyInput from 'react-native-currency-input';
import { useTheme } from 'styled-components';
import { RFValue } from 'react-native-responsive-fontsize';

import * as S from './styles';
import yupResolver from './schemaValidation';
import { Car } from '../../shared/types';
import { Input, Button, BackButton } from '../../components';
import { Error } from '../../components/Input/styles';
import { saveCar, uploadPhotos } from '../../services/car';

type NewFormData = Omit<Car, 'id' | 'photos' | 'value'> & {
  value: string;
};

type ImageFormat = {
  uri: string;
  name: string;
  type: string;
};

function New() {
  const theme = useTheme();
  const navigation = useNavigation();
  const [images, setImages] = useState<ImageFormat[]>([]);
  const [loading, setLoading] = useState(false);
  const [status, requestPermission] = ImagePicker.useMediaLibraryPermissions();

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<NewFormData>({
    resolver: yupResolver
  });

  function handleBack() {
    navigation.goBack();
  }

  async function handleSelectPicture() {
    try {
      if (!status?.granted) {
        requestPermission();
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: false,
        aspect: [4, 3],
        quality: 1,
        allowsMultipleSelection: true
      });

      if (!result.canceled && result.assets.length > 0) {
        const assets = result.assets.map(asset => {
          const assetSplit = asset.uri.split('/');
          const fileNameWithExtension = assetSplit.pop()!;

          const extension = fileNameWithExtension?.split('.').pop();

          return {
            uri: asset.uri,
            name: fileNameWithExtension,
            type: `image/${extension}`
          };
        });

        setImages(assets);
      }
    } catch (e) {
      console.log('>>> Error', e);
      Alert.alert('Ocorreu um erro ao carregar a foto.');
    }
  }

  async function handleNewCar(data: NewFormData) {
    try {
      if (images.length === 0) {
        Alert.alert('Selecione 1 ou mais fotos.');
        return;
      }

      setLoading(true);

      const formData = new FormData();

      images.map(image => {
        formData.append('files', image);
      });

      const photoIds = await uploadPhotos(formData);

      const saveCarData = {
        ...data,
        photo: photoIds
      };

      await saveCar(saveCarData);

      Alert.alert('Dados salvos com sucesso!');

      navigation.goBack();
    } catch (e) {
      console.log('>>> Error', e);
      Alert.alert('Ocorreu um erro ao salvar os dados.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <S.Container>
          <StatusBar
            barStyle="light-content"
            translucent
            backgroundColor="transparent"
          />

          <S.Header>
            <BackButton color="light" onPress={handleBack} />
            <S.Title>Cadastrar carro</S.Title>
          </S.Header>

          <S.Form>
            <Input
              name="brand"
              control={control}
              placeholder="Marca"
              autoCapitalize="none"
              error={errors.brand && errors.brand.message}
            />

            <Input
              name="model"
              control={control}
              placeholder="Modelo"
              autoCapitalize="none"
              error={errors.model && errors.model.message}
            />

            <Input
              name="year"
              control={control}
              placeholder="Ano"
              keyboardType="numeric"
              autoCapitalize="none"
              error={errors.year && errors.year.message}
            />

            <Input
              name="city"
              control={control}
              placeholder="Cidade"
              autoCapitalize="none"
              error={errors.city && errors.city.message}
            />

            <Controller
              name="value"
              control={control}
              render={({ field: { onChange, value } }) => (
                <CurrencyInput
                  value={Number(value)}
                  onChangeValue={onChange}
                  prefix="R$ "
                  delimiter="."
                  separator=","
                  precision={2}
                  minValue={0}
                  placeholder="Valor"
                  style={{
                    flex: 1,
                    backgroundColor: theme.colors.white,
                    color: theme.colors.gray_400,
                    fontFamily: theme.fonts.family.inter.regular,
                    fontSize: RFValue(15),
                    paddingHorizontal: 12,
                    paddingVertical: 12,
                    marginBottom: 14
                  }}
                />
              )}
            />
            {!!errors.value && !!errors.value.message && (
              <Error>{errors.value.message}</Error>
            )}

            <S.PhotoButton onPress={handleSelectPicture}>
              <Ionicons name="camera-outline" size={30} color="black" />
              <S.PhotoButtonText>
                Selecione as fotos ({images.length})
              </S.PhotoButtonText>
            </S.PhotoButton>

            <Button
              title="Salvar"
              onPress={() => handleSubmit(handleNewCar)()}
              loading={loading}
            />
          </S.Form>
        </S.Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

export default New;
