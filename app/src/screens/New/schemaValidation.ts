import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schemaValidation = Yup.object().shape({
  brand: Yup.string().required('Marca obrigatória.'),
  model: Yup.string().required('Modelo obrigatório.'),
  year: Yup.string()
    .min(4, 'Informe um ano válido')
    .max(4, 'Informe um ano válido')
    .required('ano obrigatório.')
    .test('year', 'Ano inválido, informe um ano com 4 digitos', value => {
      const isNumber = /\d{4}/.test(value);

      return isNumber;
    }),
  city: Yup.string().required('Cidade obrigatória.'),
  value: Yup.string().required('Valor obrigatório.')
});

export default yupResolver(schemaValidation);
