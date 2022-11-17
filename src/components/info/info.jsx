import "./info.scss";
import Stories from "../stories/stories";
import Video from "../video/video";
import CommentForm from "../comment-form/comment-form";

const Info = ({isCommentsShow, setIsCommentsShow}) => {
  const handleScroll = (evt) => {
    evt.preventDefault();
    document.querySelector('.freestyle-about__link').scrollIntoView({ block: 'center', behavior: 'smooth' });
  }

  return (
    <div className="freestyle-info">
      <Video/>
      <div className="freestyle-info__stories-block">
        <Stories/>
        <p className="freestyle-info__stories-block-text">Три героя, три поколения, один день с портативным проектором
          The Freestyle от Samsung. Участникам шоу
          предстоит придумать и воплотить в жизнь оригинальные сценарии использования проектора.</p>
      </div>
      <div className="freestyle-info__title-block">
        <h2 className="freestyle-info__title-block-title">Прием комментариев закрыт.</h2>
        {/*<p className="freestyle-info__title-block-text">Придумай свой вариант использования проектора и поделись идеей в*/}
        {/*  комментариях. Автор самого интересного*/}
        {/*  сценария станет обладателем The Freestyle от Samsung и героем нашего следующего видео.</p> */}
      </div>
      {/*{isCommentsShow ? (<CommentForm handleScroll={handleScroll}/>) : (*/}
      {/*  <div className="freestyle-info__initial">*/}
      {/*    <button*/}
      {/*      className={`freestyle-form__button`}*/}
      {/*      style={{justifySelf: 'flex-start', marginBottom: 8}}*/}
      {/*      onClick={() => setIsCommentsShow(true)}*/}
      {/*    >*/}
      {/*      Оставить комментарий*/}
      {/*    </button>*/}
      {/*    <a href="#" className="freestyle-form__link" onClick={handleScroll}>Подробно об акции</a>*/}
      {/*  </div>*/}
      {/*)}*/}
    </div>
  );
};

export default Info;
