import "./freestyle-winners.scss";
import {useDispatch} from "react-redux";
import {setIsReminderPopupShow} from "../../services/actions/popup";

const FreestyleWinners = () => {
  const dispatch = useDispatch();

  const handleRemind = () => dispatch(setIsReminderPopupShow(true));

  return (
    <section className="freestyle-winners">
      <div className="freestyle-winners__wrapper">
        <h2 className="freestyle-winners__title">Наши побидители:</h2>

        <div className="freestyle-winners__comments">
          <div className="freestyle-winners__item">

            <div className="freestyle-winners__column">

              <p className="freestyle-winners__number">1
                <span>место</span>
              </p>

              <div className="freestyle-winners__prize">
                <h3 className="freestyle-winners__prize-title">Samsung The Freestyle</h3>
                <img className="freestyle-winners__prize-image" src="https://www.technodom.kz/under/samsung-freestyle/images/product-main-1.png" alt=""/>
              </div>

            </div>

            <div className="freestyle-winners__text-container">
              <h3 className="freestyle-winners__name">Алишер:</h3>
              <p className="freestyle-winners__text">Здравствуйте! Возможно мой вариант настолько банален, что я не смогу выиграть проектор, но я все же его расскажу. Я работаю учителем химии в одной из школ города Костанай. В нашем кабинете лампа проектора уже давным давно просрочена, когда его включаешь там так и выходит уведомление "срок годности лампы закончен". Порой много чего интересного хочется показать детям, Возможно какие то опыты, которые не возможно провести в школе по химии, но к сожалению этого не получается. Я конечно от себя это показываю, но детям естественно ничего не видно не смотря на то что все окна закрыты шторками. Возможно конечно мне и около 300 детям повезёт и мы выиграем этот проектор и наши уроки станут эффективнее и доступнее для детей. В свою очередь уже несколько лет мы ждём замены проектора в нашем кабинете, но результатов пока нет. Надеюсь победит действительно тот, кому он действительно нужен. Всем участникам удачи</p>
            </div>

          </div>
        </div>

        <div className="freestyle-winners__comments">
          <div className="freestyle-winners__item">

          <div className="freestyle-winners__column">

            <p className="freestyle-winners__number">2
              <span>место</span>
            </p>

            <div className="freestyle-winners__prize">
              <h3 className="freestyle-winners__prize-title">Samsung Giga Party MX-ST50B/RU</h3>
              <img className="freestyle-winners__prize-image" src="https://www.technodom.kz/under/samsung-freestyle/images/giga-patry.png" alt=""/>
            </div>

          </div>

          <div className="freestyle-winners__text-container">
            <h3 className="freestyle-winners__name">Анастасия:</h3>
            <p className="freestyle-winners__text">Мне 16 лет и я играю на ф-но с 6 лет. С недавнего времени я слежу за исполнителем с псевдонимом Ratovich. Он особенно прославился благодаря видео с исполнением муз. каверов/произведений в разных локациях, в разных местах, в разных странах. Чего стоит снять такой ролик на озере Байкал, в Чарынском каньоне, или в Милане перед собором св. Марии(😬?)Мне даже представить сложно каких усилий это стоит, и поэтому для меня портативный проектор вместе с чисто белым полотном послужил бы отличным фоном к исполнению моих композиций. С Ратовичем я конечно не сравнюсь, но мне это и не нужно. Я собираюсь равняться на него в плане исполнительства, а не кол-ве мест, в которых я "побываю" благодаря "волшебному телепорту".</p>
          </div>

        </div>
        </div>

        <div className="freestyle-winners__comments">
          <div className="freestyle-winners__item">

            <div className="freestyle-winners__column">

              <p className="freestyle-winners__number">3
                <span>место</span>
              </p>

              <div className="freestyle-winners__prize">
                <h3 className="freestyle-winners__prize-title">Samsung Giga Party MX-ST40B/RU</h3>
                <img className="freestyle-winners__prize-image" src="https://www.technodom.kz/under/samsung-freestyle/images/giga-patry.png" alt=""/>
              </div>

            </div>

            <div className="freestyle-winners__text-container">
              <h3 className="freestyle-winners__name">Айгерим:</h3>
              <p className="freestyle-winners__text">Телепортация через проектор the freestyle в мир Технодома, где технику нужно спасти от ржавого злодея. С помощью проектора герой буквально сжигает мощным ультрафиолетом злодея. The end.</p>
            </div>

          </div>
        </div>

      </div>
    </section>
);
};

export default FreestyleWinners;
