import "./products.scss";
import "./gallery.scss";
import "./banners.scss";
import "./info.scss";
import {useState} from "react";

const Product = () => {
  const [productImage, setProductImage] = useState("https://www.technodom.kz/under/samsung-freestyle/images/product-main-1.png");

  const handleClickProduct = (evt) => setProductImage(evt.currentTarget.querySelector("img").dataset.src);

  return (
    <section className="freestyle-product">

      <div className="freestyle-product__wrapper">
        <h2 className="freestyle-product__title-mobile">Samsung <br/> The Freestyle</h2>

        <div className="freestyle-product__gallery">

          <img src={productImage} alt=""
               className="freestyle-product__image"/>

          <ul className="freestyle-product__thumbs">

            <li
              className={`freestyle-product__thumb ${productImage === 'https://www.technodom.kz/under/samsung-freestyle/images/product-main-1.png' ? 'freestyle-product__thumb_active' : ''}`}
              onClick={handleClickProduct}>
              <img src="https://www.technodom.kz/under/samsung-freestyle/images/product-main-1.png" alt=""
                   className="freestyle-product__thumb-image"
                   data-src="https://www.technodom.kz/under/samsung-freestyle/images/product-main-1.png"/>
            </li>

            <li
              className={`freestyle-product__thumb ${productImage === 'https://www.technodom.kz/under/samsung-freestyle/images/product-main-2.png' ? 'freestyle-product__thumb_active' : ''}`}
              onClick={handleClickProduct}>
              <img src="https://www.technodom.kz/under/samsung-freestyle/images/product-main-2.png" alt=""
                   className="freestyle-product__thumb-image"
                   data-src="https://www.technodom.kz/under/samsung-freestyle/images/product-main-2.png"/>
            </li>

            <li
              className={`freestyle-product__thumb ${productImage === 'https://www.technodom.kz/under/samsung-freestyle/images/product-main-3.png' ? 'freestyle-product__thumb_active' : ''}`}
              onClick={handleClickProduct}>
              <img src="https://www.technodom.kz/under/samsung-freestyle/images/product-main-3.png" alt=""
                   className="freestyle-product__thumb-image"
                   data-src="https://www.technodom.kz/under/samsung-freestyle/images/product-main-3.png"/>
            </li>

          </ul>

        </div>

        <div className="freestyle-product__info">

          <h2 className="freestyle-product__title">Samsung <br/> The Freestyle</h2>

          <div className="freestyle-product__specifications">

            <div className="freestyle-product__attributes">

              <div className="freestyle-product__attribute">
                <p className="freestyle-product__attribute-name">Рекомендуемая область применения</p>
              </div>

              <p className="freestyle-product__attribute-value">Для домашнего кинотеатра</p>

            </div>

            <div className="freestyle-product__attributes">

              <div className="freestyle-product__attribute">
                <p className="freestyle-product__attribute-name">Варианты проекции</p>
              </div>

              <p className="freestyle-product__attribute-value">Фронтальная</p>

            </div>

            <div className="freestyle-product__attributes">

              <div className="freestyle-product__attribute">
                <p className="freestyle-product__attribute-name">Пульт ДУ</p>
              </div>

              <p className="freestyle-product__attribute-value">Да</p>

            </div>

            <div className="freestyle-product__attributes">

              <div className="freestyle-product__attribute">
                <p className="freestyle-product__attribute-name">Функции и особенности</p>
              </div>

              <p className="freestyle-product__attribute-value">Быстрое включение, Технология Digital Clean View,
                Режим Кино, Поддержка функции Sound Mirroring, Tap View</p>

            </div>

          </div>

          <div className="freestyle-product__variants">
            <h3 className="freestyle-product__variants-title">Выберите цвет чехла</h3>
            <p className="freestyle-product__variants-text">Цветной чехол оплачивается дополнительно</p>

            <div className="freestyle-product__variants-items">
              <button type="button"
                      className="freestyle-product__variants-item freestyle-product__variants-item_active">Белый
              </button>
              <button type="button" className="freestyle-product__variants-item">Бежевый</button>
            </div>

          </div>

          <div className="freestyle-product__price-container">
            <p className="freestyle-product__price">599 990 ₸</p>
            <a href="/p/proektor-samsung-sp-lsp3blaxce-freestyle-fhd-smart-white-259275?recommended_by=instant_search"
               className="freestyle-product__link">Подробнее</a>
          </div>
        </div>

        <div className="freestyle-product__banners">
          <picture>
            <source media="(min-width: 769)"
                    srcSet="https://www.technodom.kz/under/samsung-freestyle/images/product-banner-deskp.png"/>
            <source media="(max-width: 768)"
                    srcSet="https://www.technodom.kz/under/samsung-freestyle/images/product-banner-mobile.png"/>
            <img src="https://www.technodom.kz/under/samsung-freestyle/images/product-banner-deskp.png" alt=""
                 className="freestyle-product__banner"/>
          </picture>
        </div>

      </div>

    </section>
  );
};

export default Product;
