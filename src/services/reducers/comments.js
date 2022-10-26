import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  comments: [],
  isCommentSending: false,
  isCommentsLoading: false,
  isCommentSended: false,
};

export const commentsState = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    getCommentsRequestAction: (state) => {
      state.isCommentsLoading = true;
    },
    getCommentsRequestSuccessAction: (state, action) => {
      state.isCommentsLoading = false;
      state.comments = action.payload;
    },
    sendCommentRequestAction: (state) => {
      state.isCommentSending = true;
    },
    sendCommentRequestSuccessAction: (state) => {
      state.isCommentSending = false;
      state.isCommentSended = true;
    }
  }
});

const {actions, reducer} = commentsState;

export const {
  getCommentsRequestAction,
  getCommentsRequestSuccessAction,
  sendCommentRequestAction,
  sendCommentRequestSuccessAction
} = actions;

export default reducer
