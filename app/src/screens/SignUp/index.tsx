import React from 'react';
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from 'react-native';

import { useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';

import * as S from './styles';
import yupResolver from './schemaValidation';
import { Button, BackButton, Input } from '../../components';
import { useAuth } from '../../hooks/auth';

type SignUpFormData = {
  username: string;
  email: string;
  password: string;
};

function SignUp() {
  const navigation = useNavigation();
  const { signUp } = useAuth();
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<SignUpFormData>({
    resolver: yupResolver
  });

  async function handleSignUp(data: SignUpFormData) {
    try {
      await signUp(data);
    } catch (error) {
      Alert.alert((error as Error).message);
    }
  }

  function handleNavigateSignIn() {
    navigation.goBack();
  }

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <S.Container>
          <S.Header>
            <BackButton color="dark" onPress={handleNavigateSignIn} />
          </S.Header>

          <S.Title>Crie sua conta</S.Title>
          <S.Subtitle>Faça seu cadastro de forma rápida e fácil.</S.Subtitle>

          <S.Form>
            <Input
              name="username"
              control={control}
              placeholder="Nome"
              iconName="user"
              autoCorrect={false}
              autoCapitalize="none"
              error={errors.username && errors.username.message}
            />

            <Input
              name="email"
              control={control}
              placeholder="E-mail"
              iconName="mail"
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              error={errors.email && errors.email.message}
            />

            <Input
              name="password"
              control={control}
              placeholder="Senha"
              iconName="lock"
              autoCorrect={false}
              autoCapitalize="none"
              isPasswordInput
              error={errors.password && errors.password.message}
            />
          </S.Form>

          <Button
            title="Cadastrar"
            onPress={() => handleSubmit(handleSignUp)()}
            loading={false}
            enabled={true}
          />
        </S.Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

export default SignUp;
