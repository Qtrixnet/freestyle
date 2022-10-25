import { combineReducers } from "redux";
import commentsReducer from './comments';
import languagesReducer from './languages';
import popupReducer from './popup';

export const rootReducer = combineReducers({
  commentsData: commentsReducer,
  languagesData: languagesReducer,
  popupData: popupReducer,
});
