import { createAction } from '@reduxjs/toolkit';

export interface AddProductData {
  title: string;
  author: string;
  year: string;
  rating: string;
}

export const getProducts = createAction('getProducts');

export const addProduct = createAction<AddProductData>('addProduct');

export const deleteProduct = createAction<number>('deleteProduct');
