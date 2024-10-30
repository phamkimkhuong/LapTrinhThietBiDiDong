import { takeEvery, call, put } from 'redux-saga/effects';
import { addTodo, setLoading } from './todoSlice';

function* handleAddTodo(action) {
  yield put(setLoading(true));
  // Giả lập một API call
  yield new Promise((resolve) => setTimeout(resolve, 1000));
  yield put(addTodo(action.payload));
  yield put(setLoading(false));
}

export function* watchAddTodo() {
  yield takeEvery('todos/addTodo', handleAddTodo);
}