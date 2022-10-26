import api from "../../utils/Api";
import {
  sendCommentRequestAction,
  sendCommentRequestSuccessAction,
  getCommentsRequestAction,
  getCommentsRequestSuccessAction
} from "../reducers/comments";

export const getComments = () => dispatch => {
  dispatch(getCommentsRequestAction());

  api.getComments()
    .then(res => dispatch(getCommentsRequestSuccessAction(res.reverse())))
    .catch(err => console.log(err))
}

export const sendComment = (data) => dispatch => {
  dispatch(sendCommentRequestAction());

  api.sendComment(data)
    .catch(err => console.log(err))
    .finally(() => dispatch(sendCommentRequestSuccessAction()))
}
