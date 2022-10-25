import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  language: 'ru'
};

export const languageState = createSlice({
  name: 'language',
  initialState,
  reducers: {
    //* здесь нужно написать функции, которые будут менять состояние
  }
});

const {actions, reducer} = languageState;

export const {
  //* сюда нужно вставить функции, которые меняют состояние
} = actions;

export default reducer
