import "./winner.scss";

const Winner = () => {
  return (
    <section className="freestyle-winner">
      <div className="freestyle-winner__header winner-header">
        <img src="https://www.technodom.kz/under/samsung-freestyle/images/winner-block-product.png"
             alt="samsung-freestle" className="winner-header__img"/>
          <h2 className="winner-header__title">
            Один день <br/>
            с победителем конкурса
            The Freestyle Experiment
          </h2>
      </div>
      <div className="freestyle-winner__video winner-video">
        <img src="https://www.technodom.kz/under/samsung-freestyle/images/winner-block-video.png" alt="video"
             className="winner-video__img"/>
          <div className="winner-video__wrapper">
            <div className="winner-video__info video-info">
              <h3 className="video-info__title">
                Название видео
              </h3>
              <p className="video-info__text">
                «Комментарий автора, комментарий автора, комментарий автора"
              </p>
              <a href="#" className="video-info__link">
                Смотреть
              </a>
            </div>
            <div className="winner-video__person video-person">
              <img src="https://www.technodom.kz/under/samsung-freestyle/images/winner-block-ava.png" alt=""
                   className="video-person__img"/>
                <h4 className="video-person__title">
                  Имя Фамилия
                </h4>
                <p className="video-person__text">
                  Чем занимается,
                  из какого города
                </p>
            </div>
          </div>
      </div>
    </section>
  );
};

export default Winner;
