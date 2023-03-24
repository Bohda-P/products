import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { addProduct, deleteProduct, getProducts } from './actions';

export interface ProductResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

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
  products: ProductResponse;
  loading: boolean;
  error: unknown;
}

// Define the initial state using that type
const initialState: ProductState = {
  products: null,
  loading: null,
  error: null,
};

export const counterSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getProductsSuccess: (state, action: PayloadAction<ProductResponse>) => {
      state.products = action.payload;
      state.loading = false;
    },
    getProductsFailure: (state, action: PayloadAction<unknown>) => {
      state.loading = false;
      state.error = action.payload;
    },
    addProductSuccess: (state, action: PayloadAction<Product>) => {
      state.products.products.push(action.payload);
      state.loading = false;
    },
    addProductFailure: (state, action: PayloadAction<unknown>) => {
      state.loading = false;
      state.error = action.payload;
    },
    deleteProductSuccess: (state, action: PayloadAction<number>) => {
      state.products.products = state.products.products.filter(
        (item) => item.id !== action.payload
      );
      state.loading = false;
    },
    deleteProductFailure: (state, action: PayloadAction<unknown>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts, (state) => {
      state.loading = true;
    });
    builder.addCase(addProduct, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteProduct, (state) => {
      state.loading = true;
    });
  },
});

export const {
  getProductsSuccess,
  getProductsFailure,
  addProductSuccess,
  addProductFailure,
  deleteProductSuccess,
  deleteProductFailure,
} = counterSlice.actions;

export const productsReducer = counterSlice.reducer;
