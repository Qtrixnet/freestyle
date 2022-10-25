import "./info.scss";
import Stories from "../stories/stories";
import Video from "../video/video";

const Info = () => {
  return (
    <div className="freestyle-info">
      <Video/>
      <div className="freestyle-info__stories-block">
        <Stories/>
        <p className="freestyle-info__stories-block-text">Три героя, три поколения, один день с портативным проектором The Freestyle от Samsung. Участникам шоу
          предстоит придумать и воплотить в жизнь оригинальные сценарии использования проектора.</p>
      </div>
      <div className="freestyle-info__title-block">
        <h2 className="freestyle-info__title-block-title">Учайствуй в конкурсе и стань нашим героем!</h2>
        <p className="freestyle-info__title-block-text">Придумай свой вариант использования проектора и поделись идеей в комментариях. Автор самого интересного
          сценария станет обладателем The Freestyle от Samsung и героем нашего следующего видео.</p>
      </div>
    </div>
  );
};

export default Info;
