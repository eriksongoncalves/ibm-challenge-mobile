import { Car } from '../shared/types';

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      signIn: undefined;
      signUp: undefined;
      home: undefined;
      new: undefined;
      detail: {
        car: Car;
      };
    }
  }
}
