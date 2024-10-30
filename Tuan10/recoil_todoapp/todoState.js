import { atom, selector } from 'recoil';
import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/todos';

// Atom để lưu danh sách ToDo
export const todoListState = atom({
  key: 'todoListState',
  default: [],
});

// Selector để lấy danh sách ToDo từ API
export const fetchTodos = selector({
  key: 'fetchTodos',
  get: async ({ get }) => {
    const response = await axios.get(API_URL);
    return response.data;
  },
});
