import { ProductsState } from '../../types/States';
import { ProductsAction } from '../../types/Actions';
import { ACTION_FETCH_PRODUCTS, ACTION_FETCH_MORE_PRODUCTS, ACTION_ERROR } from './types';

export function productsReducer(state: ProductsState, action: ProductsAction): ProductsState {
  switch (action.type) {
    case ACTION_FETCH_PRODUCTS:
      if (!state.products || !action.value.products) return state;
      return {
        products: [...action.value.products],
        status: action.value.status,
      };

    case ACTION_FETCH_MORE_PRODUCTS:
      if (!state.products || !action.value.products) return state;
      return {
        products: [...action.value.products, ...state.products],
        status: action.value.status,
      };

    case ACTION_ERROR:
      return {
        ...state,
        status: action.value.status,
      };

    default:
      throw new Error(`unexpected action.type: ${action.type}`);
  }
}