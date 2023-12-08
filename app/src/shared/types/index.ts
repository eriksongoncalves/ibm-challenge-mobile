export type User = {
  id: string;
  username: string;
  email: string;
};

export type Credentials = {
  email: string;
  password: string;
};

export type Car = {
  id: string;
  brand: string;
  model: string;
  value: number;
  year: string;
  city: string;
  photos: string[];
};
