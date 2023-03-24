import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getProduct } from './actions';

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

interface ProductState {
  product: Product;
  loading: boolean;
  error: unknown;
}

const initialState: ProductState = {
  product: null,
  loading: null,
  error: null,
};

export const counterSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getProductSuccess: (state, action: PayloadAction<Product>) => {
      state.product = action.payload;
      state.loading = false;
    },
    getProductFailure: (state, action: PayloadAction<unknown>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProduct, (state) => {
      state.loading = true;
    });
  },
});

export const { getProductSuccess, getProductFailure } = counterSlice.actions;

export const productReducer = counterSlice.reducer;
