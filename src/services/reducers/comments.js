import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  comments: [],
  isCommentSending: false,
  isCommentsLoading: false,
};

export const commentsState = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    getCommentsRequest: (state) => {
      state.isCommentsLoading = true;
    },
    getCommentsRequestSuccess: (state, action) => {
      state.isCommentsLoading = false;
      state.comments = action.payload;
    },
    sendCommentRequest: (state) => {
      state.isCommentSending = true;
    },
    sendCommentRequestSuccess: (state) => {
      state.isCommentSending = false;
    }
  }
});

const {actions, reducer} = commentsState;

export const {
  getCommentsRequest,
  getCommentsRequestSuccess,
  sendCommentRequest,
  sendCommentRequestSuccess
} = actions;

export default reducer
