import React from 'react';
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from 'react-native';
import { useTheme } from 'styled-components';

import { useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';

import * as S from './styles';
import yupResolver from './schemaValidation';
import { Button, Input } from '../../components';
import { useAuth } from '../../hooks/auth';

type SignInFormData = {
  email: string;
  password: string;
};

function SignIn() {
  const navigation = useNavigation();
  const theme = useTheme();
  const { signIn } = useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<SignInFormData>({
    resolver: yupResolver
  });

  async function handleSignIn(data: SignInFormData) {
    try {
      await signIn(data);
    } catch (error) {
      Alert.alert((error as Error).message);
    }
  }

  function handleNavigateSignUp() {
    navigation.navigate('signUp');
  }

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <S.Container>
          <S.Title>Login</S.Title>
          <S.Subtitle>
            Faça seu login para começar uma experiência incrível.
          </S.Subtitle>

          <S.Form>
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
            title="Login"
            onPress={() => handleSubmit(handleSignIn)()}
            loading={false}
            enabled={true}
          />

          <Button
            title="Criar conta gratuita"
            onPress={handleNavigateSignUp}
            color={theme.colors.white}
            loading={false}
            enabled={true}
            light
          />
        </S.Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

export default SignIn;
