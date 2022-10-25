import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  isReminderPopupShow: false
};

export const popupState = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    setIsReminderPopupShowAction: (state, action) => {
      state.isReminderPopupShow = action.payload;
    },
  }
});

const {actions, reducer} = popupState;

export const {
  setIsReminderPopupShowAction
} = actions;

export default reducer
