import React from "react";
import "../Info/Info.css";

const Info = () => {
  return (
    <div>
      <div className="main_info_block">
        <div className="info_block__content">
          <h1 className="info_block_title">
            Нанимайте онлайн лучших фрилансеров для любой работы
          </h1>
          <ul className="info_block__list">
            <li className="info_block__list-item">
              Один из крупнейших в мире рынок фриланса
            </li>
            <li className="info_block__list-item">
              Любая работа, которую вы только можете себе представить
            </li>
            <li className="info_blockk__list-item">
              Экономьте до 90% и получайте бесплатно ценовые предложения
            </li>
            <li className="info_block__list-item">
              Платите только тогда, когда вы на 100% довольны результатом
            </li>
          </ul>
          <div className="info_block__block_btn">
            <button style={{}} className="info_block__left-btn">
              Нанять фрилансера
            </button>
            <button className="info_block__right-btn">
              Зарабатывайте фрилансом
            </button>
          </div>
        </div>
        <span className="line1"></span>
        <div className="info_block__block-desc">
          <div className="block-desc__top">
            <h2 className="block-desc_top__title">Нужно что-то сделать?</h2>
            <ul className="block-desc_top__desc-list">
              <li className="block-desc_top__desc-list-item">
                <h3>Опубликуйте работу</h3>
                Опубликовать работу – это бесплатно и несложно. Просто введите
                название, описание и бюджет, и конкурентные заявки начнут
                поступать через считанные минуты.
              </li>
              <li className="block-desc_top__desc-list-item">
                <h3>Выберите фрилансеров</h3>
                Не бывает слишком большой или слишком мелкой работы. У нас есть
                фрилансеры с более чем 1800 навыками для работы любого объема и
                с любым бюджетом. Для нас нет слишком сложной работы. Мы
                справимся с любой!
              </li>
              <li className="block-desc_top__desc-list-item">
                <h3>Платите безопасно</h3>
                Оплачивайте работу только тогда, когда она выполнена и вы на
                100% удовлетворены качеством, используя нашу систему
                промежуточных платежей.
              </li>
            </ul>
          </div>
          <span className="line2"></span>

          <div className="block-desc__bottom"></div>
        </div>

        <video
          className="main_info_block_video"
          autoPlay
          playsInline
          muted
          loop
          src="https://www.f-cdn.com/assets/main/en/assets/home/video/house-v3.mp4"
        ></video>
      </div>
    </div>
  );
};

export default Info;
