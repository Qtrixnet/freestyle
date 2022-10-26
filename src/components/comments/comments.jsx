import "./comments.scss";
import {useEffect} from "react";
import {getComments} from "../../services/actions/comments";
import {useDispatch, useSelector} from "react-redux";
import EmptyComments from "../empty-comments/empty-comments";
import Comment from "../comment/comment";

const Comments = () => {
  const dispatch = useDispatch();
  const comments = useSelector(state => state.commentsData.comments);

  useEffect(() => {
    dispatch(getComments());

    const id = setInterval(() => {
      dispatch(getComments());
    }, 1000 * 5)

    return () => clearInterval(id)
  }, [])

  return (
    <div className="freestyle-comments">
      {comments.length > 0 ? (
        <ul className="freestyle-comments__list">
          {
            comments.map(comment => <Comment key={comment.date} data={comment}/>)
          }
        </ul>
      ) : (<EmptyComments/>)}
    </div>
  );
};

export default Comments;
