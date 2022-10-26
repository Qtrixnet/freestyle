import "./comment.scss";

const Comment = ({data}) => {
  const {name, phone, comment, techDate} = data;
  return (
    <li className="freestyle-comment">
      <header className="freestyle-comment__header">
        <span className="freestyle-comment__name">{name},</span>
        <span className="freestyle-comment__phone">{phone?.replace(/....$/g, '****')}</span>
      </header>
      <p className="freestyle-comment__text">{comment}</p>
      <span className="freestyle-comment__date">{techDate?.split(',')[0]}</span>
    </li>
  );
};

export default Comment;
