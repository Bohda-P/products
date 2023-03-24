import { SagaIterator } from 'redux-saga';
import { put, call, all, takeLeading } from 'redux-saga/effects';
import { httpClient } from '../../api';
import { getProduct } from './actions';
// Api
// Actions
import { getProductSuccess, Product, getProductFailure } from './slice';

interface Response {
  data: Product;
}

/**
 * API methods
 */

const fetchProduct = async (id: string): Promise<Response> => {
  return httpClient.get(`products/${id}`);
};

/**
 * Sagas
 */

function* getProductSaga(action: ReturnType<typeof getProduct>) {
  try {
    const { data } = yield call(fetchProduct, action.payload);
    yield put(getProductSuccess(data));
  } catch (error) {
    yield put(getProductFailure(error));
  }
}

/**
 * Root feature saga
 */
export function* productSaga(): SagaIterator {
  yield all([yield takeLeading(getProduct, getProductSaga)]);
}
