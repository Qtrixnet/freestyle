import "./live-show.scss";
import "./video.scss";
import "./guest.scss";
import "./background.scss";
import {useDispatch} from "react-redux";
import {setIsReminderPopupShow} from "../../services/actions/popup";

const LiveShow = () => {
  const dispatch = useDispatch();

  const handleRemind = () => dispatch(setIsReminderPopupShow(true));

  return (
    <section className="freestyle-live">
      <div className="freestyle-live__wrapper">
        <h2 className="freestyle-live__title">Не пропусти выбор победителя в прямом эфире! </h2>

        <div className="freestyle-live__video-container">

          <div className="freestyle-live__text-container">
            <p className="freestyle-live__text">
              15 ноября 2022 года подводим итоги конкурса
              The Freestyle Experiment! Герои видеопроекта, приглашенные звезды, подарки для зрителей
              и демонстрация возможностей The Freestyle
              в прямом эфире. Оставь свой e-mail и получи уведомление и ссылку на трансляцию за день
              до старта прямого эфира.
            </p>
            <button className="freestyle-live__button" onClick={handleRemind}>Напомнить</button>
          </div>

          <div className="freestyle-live__video">
            <iframe className="freestyle-live__poster" width="560" height="315"
                    src="https://www.youtube.com/embed/rrMG40V66hE" title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
          </div>

          <div className="freestyle-live__element">
          </div>
        </div>
        <div className="freestyle-live__background"></div>

        <div className="freestyle-live__guest">
          <ul className="freestyle-live__guest-list">

            <li className="freestyle-live__guest-item">
              <img src="https://www.technodom.kz/under/samsung-freestyle/images/avatar-1.png" alt=""
                   className="freestyle-live__guest-avatar"/>
                <p className="freestyle-live__guest-name">Канат Бейсекеев</p>
            </li>

            <li className="freestyle-live__guest-item">
              <img src="https://www.technodom.kz/under/samsung-freestyle/images/avatar-2.png" alt=""
                   className="freestyle-live__guest-avatar"/>
                <p className="freestyle-live__guest-name">Тимур Балыметов</p>
            </li>

            <li className="freestyle-live__guest-item">
              <img src="https://www.technodom.kz/under/samsung-freestyle/images/avatar-4.png" alt=""
                   className="freestyle-live__guest-avatar"/>
                <p className="freestyle-live__guest-name">Вероника Ким</p>
            </li>

          </ul>
        </div>

      </div>
    </section>
);
};

export default LiveShow;
