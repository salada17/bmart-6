import { Product, User } from './data';

export interface ProductsState {
  products?: Product[];
  status: number;
}

export interface UserState extends User {
  isAuthorized: boolean;
  status: number;
}
