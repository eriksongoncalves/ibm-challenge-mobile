import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schemaValidation = Yup.object().shape({
  username: Yup.string().required('Nome obrigatório.'),
  email: Yup.string().required('E-mail obrigatório.').email('E-mail inválido.'),
  password: Yup.string().required('Senha obrigatória')
});

export default yupResolver(schemaValidation);
