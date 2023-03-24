import { combineReducers } from '@reduxjs/toolkit';
// Reducers
import { productReducer } from './product/slice';
import { productsReducer } from './products/slice';

export const rootReducer = combineReducers({
  products: productsReducer,
  product: productReducer,
});
