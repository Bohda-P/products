import { createSelector } from 'reselect';
import { RootState } from '../store';

const selectProductsRootState = (state: RootState) => state.products;

export const selectProducts = createSelector(selectProductsRootState, ({ products }) => products);

export const selectProductsLoading = createSelector(
  selectProductsRootState,
  ({ loading }) => loading
);
