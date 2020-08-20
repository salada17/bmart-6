import { PRICEUP, PRICEDOWN } from '../commons/constants';

export interface User {
  email: string;
  nickname: string;
}
export interface UserJoin extends User {
  name: string;
  password: string;
  passwordConfirm: string;
}

export interface UserLogin {
  email: string;
  password: string;
}

export interface Category {
  id: number;
  name: string;
}

export interface Subcategory extends Category {
  categoryId: number;
}

export interface Product {
  id?: number;
  subcategoryId: number;
  title: string;
  price: number;
  discountedPrice: number;
  discountedRate: number;
  quantity: number;
  imageUrl?: string;
  isDiscounted: boolean;
  isSold: boolean;
}

export interface ProductFilter {
  limit?: number;
  offset?: number;
  title?: string;
  subcategoryId?: number;
  sortBy?: string;
}

export type ProductGridColumns = 2 | 2.5 | 3;

export interface Banner {
  id: number;
  redirectUrl: string;
  imageUrl: string;
}