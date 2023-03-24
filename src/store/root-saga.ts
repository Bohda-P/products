import { fork } from 'redux-saga/effects';
import { productSaga } from './product/saga';
// Sagas
import { productsSaga } from './products/saga';

export default function* rootSaga() {
  yield fork(productsSaga);
  yield fork(productSaga);
}
