import React, { useState } from "react";
import "./CreatingAd.css";

const CreatingAd = () => {
  const [fields, setFields] = useState({
    Adress: "",
    Title: "",
    Vol: "",
    Description: "",
    Plata: "",
    Hours: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !fields.Adress.trim() ||
      !fields.Title.trim() ||
      !fields.Vol.trim() ||
      !fields.Plata.trim()
    ) {
      return;
    }
    alert(
      fields.Adress,
      fields.Title,
      fields.Vol,
      fields.Description,
      fields.Plata,
      fields.Hours
    );
  };

  return (
    <div className="box">
      <div className="newAdvert">
        <div className="title">
          <h1>Новое объявление</h1>
          <p>Здесь арендодатель может бесплатно разместить объявление</p>
        </div>
        <form className="createAd" onSubmit={handleSubmit}>
          <div className="enter">
            <label>Адрес</label>
            <input
              type="text"
              placeholder="Адрес"
              value={fields.Adress}
              onChange={(e) => setFields({ ...fields, Adress: e.target.value })}
            />
          </div>
          <div className="enter">
            <label>Название</label>
            <input
              type="text"
              placeholder="Название помещения"
              value={fields.Title}
              onChange={(e) => setFields({ ...fields, Title: e.target.value })}
            />
          </div>
          <div className="enter">
            <label>Вместимость</label>
            <input
              type="text"
              placeholder="Макс. кол-во человек"
              value={fields.Vol}
              onChange={(e) => setFields({ ...fields, Vol: e.target.value })}
            />
          </div>
          <div className="enter">
            <label>Оплата за час</label>
            <input
              type="text"
              placeholder="Оплата за час"
              value={fields.Plata}
              onChange={(e) => setFields({ ...fields, Plata: e.target.value })}
            />
          </div>
          <div className="enter">
            <label>Срок аренды</label>
            <input
              type="text"
              placeholder="Макс. срок аренды"
              value={fields.Hours}
              onChange={(e) => setFields({ ...fields, Hours: e.target.value })}
            />
          </div>
          <div className="enter">
            <label>Описание</label>
            <textArea placeholder="Описание.."></textArea>
          </div>
          <button className="submit" type="Submit">
            Разместить
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatingAd;
