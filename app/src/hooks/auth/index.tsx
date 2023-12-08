import React, { useState, useEffect, createContext, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import * as types from './types';
import { authenticate, getProfile, register } from '../../services/auth';
import { User } from '../../shared/types';
import { api } from '../../services/api';

const AuthContext = createContext<types.AuthContextProps>(
  {} as types.AuthContextProps
);

const AuthProvider = ({ children }: types.AuthProviderProps) => {
  const [data, setData] = useState<User>({} as User);
  const [loading, setLoading] = useState(true);

  const signIn = async (credentials: types.SignInCredentials) => {
    try {
      const response = await authenticate(credentials);

      await AsyncStorage.setItem('token', response.data.jwt);

      setData(response.data.user);
    } catch (error) {
      throw new Error('Login ou senha inválidos');
    }
  };

  const signUp = async (data: types.signUpInput) => {
    try {
      const response = await register(data);

      await AsyncStorage.setItem('token', response.data.jwt);

      setData(response.data.user);
    } catch (error) {
      throw new Error('Ocorreu um erro ao tentar se cadastrar');
    }
  };

  const signOut = async () => {
    try {
      await AsyncStorage.removeItem('token');
      setData({} as User);
    } catch (error) {
      throw new Error('Ocorreu um erro ao tentar fazer logout');
    }
  };

  useEffect(() => {
    async function loadUserData() {
      try {
        const response = await getProfile();

        if (response) {
          setData(response.data);
        }
      } finally {
        setLoading(false);
      }
    }

    loadUserData();
  }, []);

  useEffect(() => {
    const subscribe = api.registerInterceptTokenManager(signOut);

    () => {
      subscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{ user: data, signIn, signOut, signUp, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthContext);
};

export { useAuth, AuthProvider };
