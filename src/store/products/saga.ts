import { SagaIterator } from 'redux-saga';
import { put, call, all, takeLeading } from 'redux-saga/effects';
import { httpClient } from '../../api';
import { getProducts, addProduct, AddProductData, deleteProduct } from './actions';
// Api
// Actions
import {
  getProductsSuccess,
  ProductResponse,
  getProductsFailure,
  addProductSuccess,
  addProductFailure,
  deleteProductSuccess,
  deleteProductFailure,
  Product,
} from './slice';

interface Response {
  data: ProductResponse;
}

/**
 * API methods
 */

const fetchProductsList = async (): Promise<Response> => {
  return httpClient.get('products');
};

const addProductToList = async (data: AddProductData): Promise<Product> => {
  return await httpClient.post(
    'products/add',
    { ...data },
    { headers: { 'Content-Type': 'application/json' } }
  );
};

const deleteProductFromList = async (id: number): Promise<Product> => {
  return httpClient.delete(`products/${id}`);
};

/**
 * Sagas
 */

function* getProductsSaga() {
  try {
    const { data } = yield call(fetchProductsList);
    yield put(getProductsSuccess(data));
  } catch (error) {
    yield put(getProductsFailure(error));
  }
}

function* addProductSaga(action: ReturnType<typeof addProduct>) {
  try {
    const { data } = yield call(addProductToList, action.payload);
    yield put(addProductSuccess(data));
  } catch (error) {
    yield put(addProductFailure(error));
  }
}

function* deleteProductSaga(action: ReturnType<typeof deleteProduct>) {
  try {
    const { data } = yield call(deleteProductFromList, action.payload);
    yield put(deleteProductSuccess(data.id));
  } catch (error) {
    yield put(deleteProductFailure(error));
  }
}

/**
 * Root feature saga
 */
export function* productsSaga(): SagaIterator {
  yield all([
    yield takeLeading(getProducts, getProductsSaga),
    yield takeLeading(addProduct, addProductSaga),
    yield takeLeading(deleteProduct, deleteProductSaga),
  ]);
}
