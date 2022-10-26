import './about.scss';

const About = () => {
  return (
    <section className="freestyle-about">
      <div className="freestyle-about__header about-header">
        <h3 className="about-header__title about-title">
          Впечатления там, где ты
        </h3>
        <p className="about-header__text about-text">
          Познакомьтесь с The Freestyle. Это проектор со всеми функциями Smart TV в небольшом корпусе.
        </p>
      </div>

      <div className="freestyle-about__grid about-grid">
        <div className="about-grid__item about-grid__item--first about-grid__item--text">
          <h3 className="about-grid__title about-title">
            Портативный, умный
            и удивительно удобный
          </h3>
          <p className="about-text">
            Возьмите The Freestyle с собой, куда бы вы ни отправились. Подключите The Freestyle к внешнему
            аккумулятору
            и наслаждайтесь просмотром в любое время
            и в любом месте. Мощный встроенный динамик
            и яркое изображения подарят вам удивительное аудиовизуальное путешествие. Просматривайте ваш
            любимый контент, используя все возможности SMART TV, подключайте мобильный телефон в пару
            кликов.
          </p>
        </div>
        <div className="about-grid__item about-grid__item---second">
          <img src="https://www.technodom.kz/under/samsung-freestyle/images/about-card-1.png" alt=""
               className="about-grid__img"/>
        </div>
      </div>

      <div className="freestyle-about__grid about-grid">
        <div className="about-grid__item">
          <img src="https://www.technodom.kz/under/samsung-freestyle/images/about-card-2.png" alt=""
               className="about-grid__img"/>
        </div>
        <div className="about-grid__item about-grid__item--text">
          <h3 className="about-grid__title about-title">
            Создайте
            свой собственный
            домашний кинотеатр.
          </h3>
          <div className="about-grid__icon-cards icon-cards">
            <div className="icon-cards__item">
              <img src="https://www.technodom.kz/under/samsung-freestyle/images/about-icon-1.png" alt=""
                   className="icon-cards__icon"/>
                <p className="icon-cards__text">
                  Объемный
                  звук 360°
                </p>
            </div>
            <div className="icon-cards__item">
              <img src="https://www.technodom.kz/under/samsung-freestyle/images/about-icon-2.png" alt=""
                   className="icon-cards__icon"/>
                <p className="icon-cards__text">
                  Все
                  возможности
                  SMART TV
                </p>
            </div>
            <div className="icon-cards__item">
              <img src="https://www.technodom.kz/under/samsung-freestyle/images/about-icon-3.png" alt=""
                   className="icon-cards__icon"/>
                <p className="icon-cards__text">
                  Автовыравнивание
                  и фокусировка
                </p>
            </div>
            <div className="icon-cards__item">
              <img src="https://www.technodom.kz/under/samsung-freestyle/images/about-icon-4.png" alt=""
                   className="icon-cards__icon"/>
                <p className="icon-cards__text">
                  Угол
                  наклона 180°
                </p>
            </div>
          </div>
          <p className="about-text">
            Проектор The Freestyle может проецировать изображение размером от 30 до 100 дюймов.
          </p>
        </div>
      </div>

      <div className="freestyle-about__background about-background">
        <h3 className="about-background__title about-title">
          Наслаждайтесь качественной <br/> цветопередачей
        </h3>
      </div>

      <div className="freestyle-about__block about-block">
        <h3 className="about-block__title about-title">
          Умная калибровка
        </h3>
        <p className="about-block__text about-text">
          Нет белой стены? The Freestyle позволяет оптимизировать проекцию
          с учетом цвета стены для улучшения условий просмотра.
        </p>
        <img src="https://www.technodom.kz/under/samsung-freestyle/images/about-card-3.png" alt=""
             className="about-block__img"/>

          <h3 className="about-block__title about-title">
            Встроенный контент для создания особой атмосферы
          </h3>
          <h4 className="about-block__subtitle">
            Режим "Ambient"
          </h4>
          <p className="about-block__text about-text">
            Превратите свое пространство в то, каким вы хотите его видеть. Выберите освещение, призму, сцену или
            одну из ваших
            собственных фотографий - с The Freestyle возможности оформления комнаты безграничны.
          </p>
          <img src="https://www.technodom.kz/under/samsung-freestyle/images/about-card-4.png" alt=""
               className="about-block__img"/>
      </div>

      <a target="_blank" href="https://www.technodom.kz/under/samsung-freestyle/rules.pdf"
         className="freestyle-about__link">Полные правила акции</a>
    </section>
  );
};

export default About;
