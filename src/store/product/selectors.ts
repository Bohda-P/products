import { createSelector } from 'reselect';
import { RootState } from '../store';

const selectProductRootState = (state: RootState) => state.product;

export const selectProduct = createSelector(selectProductRootState, ({ product }) => product);

export const selectProductLoading = createSelector(
  selectProductRootState,
  ({ loading }) => loading
);
