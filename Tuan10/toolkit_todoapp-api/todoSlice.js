import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Định nghĩa URL API
const API_URL = 'https://jsonplaceholder.typicode.com/todos';

// Tạo async thunk để lấy ToDo từ API
export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

// Tạo async thunk để thêm ToDo
export const addTodo = createAsyncThunk('todos/addTodo', async (newTodo) => {
  const response = await axios.post(API_URL, newTodo);
  return response.data;
});

// Tạo async thunk để xóa ToDo
export const removeTodo = createAsyncThunk('todos/removeTodo', async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
});

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(removeTodo.fulfilled, (state, action) => {
        state.items = state.items.filter((todo) => todo.id !== action.payload);
      });
  },
});

export default todoSlice.reducer;