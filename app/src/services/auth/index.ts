import { api } from '../api';
import { Credentials, User } from '../../shared/types';

type RegisterInput = Credentials & {
  username: string;
};

type AuthenticateResponse = {
  jwt: string;
  user: User;
};

function authenticate(credentials: Credentials) {
  return api.post<AuthenticateResponse>('/auth/local', {
    identifier: credentials.email,
    password: credentials.password
  });
}

function getProfile() {
  return api.get<User>('/users/me');
}

function register(data: RegisterInput) {
  return api.post('/auth/local/register', data);
}

export { authenticate, register, getProfile };
