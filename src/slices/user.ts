import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ITodo {
  id: string;
  task: string;
  isDone: boolean;
}

export interface UserState {
  isLoggedIn: boolean;
  todos: ITodo[];
}

const initialState: UserState = {
  isLoggedIn: false,
  todos: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.isLoggedIn = false;
    },
    insertTodo: (state, action: PayloadAction<ITodo>) => {
      state.todos = [action.payload, ...state.todos];
    },
  },
});

export const { login, logout, insertTodo } = userSlice.actions;

export default userSlice;
