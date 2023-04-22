import React from "react";
import "./Grid.css";

const Grid = () => {
  return (
    <div className="grid-container">
      <h1>Полезные ссылки</h1>
      <div className="grid-cont">
        <div className="item item--bg-blue">
          <h2>Объявления - 0 ₽</h2>
          <p>Сдайте или продайте свой дом или квартиру бесплатно</p>
          <button>Разместить</button>
        </div>
        <div className="item">
          <h2>Купить квартиру</h2>
          <a href="">1-комнатные</a>
          <a href="">2-комнатные</a>
          <a href="">3-комнатные</a>
          <a href="">Свободная планировка</a>
          <a href="">Квартиры-студии</a>
          <a href="">Комнаты в квартире</a>
        </div>
        <div className="item item--img">
          {/*<img
            src="https://banketmaster.ru/podborki2016/2018/07/9529232b0c1498b6800d63b741397ccf_thumb.jpg"
            width="400px"
  ></img>*/}
        </div>
        <div className="item">
          <h2>Снять квартиру</h2>
          <a href="">1-комнатные</a>
          <a href="">2-комнатные</a>
          <a href="">3-комнатные</a>
          <a href="">Квартиры-студии</a>
          <a href="">Комнаты в квартире</a>
        </div>
        <div className="item">
          <h2>Снять посуточно</h2>
          <a href="">Квартиры посуточно</a>
          <a href="">Коттеджи на сутки</a>
          <a href="">Комнаты на сутки</a>
          <a href="">Хостелы</a>
        </div>
        <div className="item item--img">
          {/*<img
            src="https://organizator.ru/wp-content/uploads/2022/12/originalnyj-dekor-na-novyj-god.jpg"
            width="400px"
></img>*/}
        </div>
        <div className="item">
          <h2>Новостройки</h2>
          <a href="">Каталог ЖК</a>
          <a href="">Сданные новостройки</a>
          <a href="">Строящиеся новостройки</a>
        </div>
        <div className="item">
          <h2>Загородная недвижимость</h2>
          <a href="">Каталог посёлков</a>
          <a href="">Купить дом</a>
          <a href="">Купить таунхаус</a>
          <a href="">Купить участок</a>
          <a href="">Снять дом надолго</a>
        </div>
        <div className="item item--img">
          {/*<img
            src="https://i.pinimg.com/originals/b6/7b/90/b67b90f3e7556a519161bee3be54c071.jpg"
            width="400px"
></img>*/}
        </div>
        <div className="item">
          <h2>Коммерческая недвижимость</h2>
          <a href="">Купить склад</a>
          <a href="">Купить гараж</a>
          <a href="">Купить офис</a>
          <a href="">Арендовать офис</a>
          <a href="">Арендовать помещение</a>
        </div>
        <div className="item item--card">
          <h1>Поиск на карте</h1>
          <p>Ищите новостройки рядом с работой, парком или родственниками</p>
          <button>Найти на карте</button>
        </div>
      </div>
    </div>
  );
};

export default Grid;
