/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Alert, Modal, TouchableOpacity, Text } from 'react-native';
import { useForm } from 'react-hook-form';
import { useTheme } from 'styled-components';

import * as S from './styles';
import { Input } from '../../';

type SendMessageModalProps = {
  visible: boolean;
  onClose: () => void;
};

export function SendMessageModal({ visible, onClose }: SendMessageModalProps) {
  const theme = useTheme();
  const { control } = useForm();

  function handleSendMessage() {
    Alert.alert('Mensagem enviada com sucesso!');

    onClose();
  }

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={visible}
      onRequestClose={onClose}
    >
      <S.Wrapper>
        <S.ModalContent
          style={{
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5
          }}
        >
          <S.Title>Envie uma mensagem ao vendedor</S.Title>

          <Input
            name="message"
            control={control}
            placeholder="Mensagem..."
            autoCorrect={true}
            autoCapitalize="none"
            multiline
            onSubmitEditing={handleSendMessage}
            style={{ height: 200, textAlignVertical: 'top' } as any}
          />

          <TouchableOpacity
            onPress={handleSendMessage}
            style={{
              padding: 10,
              margin: 0,
              backgroundColor: theme.colors.red_main
            }}
          >
            <Text
              style={{
                fontFamily: theme.fonts.family.inter.bold,
                fontSize: 15,
                color: theme.colors.white,
                textAlign: 'center'
              }}
            >
              ENVIAR
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={onClose}>
            <S.Title
              style={{
                textAlign: 'center',
                marginTop: 15
              }}
            >
              Cancelar
            </S.Title>
          </TouchableOpacity>
        </S.ModalContent>
      </S.Wrapper>
    </Modal>
  );
}
