import "./Rent.css";
import React, { useState } from "react";

function Rent() {
  const [fields, setFields] = useState({
    Name: "",
    Phone: "",
    Event: "",
    People: "",
    Date: "",
    Hours: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !fields.Name.trim() ||
      !fields.Phone.trim() ||
      !fields.Event.trim() ||
      !fields.People.trim() ||
      !fields.Date.trim() ||
      !fields.Hours.trim()
    ) {
      return;
    }
    alert(
      fields.Name,
      fields.Phone,
      fields.Event,
      fields.People,
      fields.Date,
      fields.Hours
    );
  };

  return (
    <div className="rentForm">
      <form className="cont" onSubmit={handleSubmit}>
        <h1 className="header">Бесплатно забронировать это место</h1>
        <div className="row">
          <div className="input">
            <label>Ваше имя</label>
            <input
              type="text"
              placeholder="Имя"
              value={fields.Name}
              onChange={(e) => setFields({ ...fields, Name: e.target.value })}
            />
          </div>
          <div className="input">
            <label>Телефон</label>
            <input
              type="tel"
              placeholder="Телефон"
              value={fields.Phone}
              onChange={(e) => setFields({ ...fields, Phone: e.target.value })}
            />
          </div>
          <div className="input">
            <label>Событие</label>
            <input
              type="text"
              placeholder="Мероприятие"
              value={fields.Event}
              onChange={(e) => setFields({ ...fields, Event: e.target.value })}
            />
          </div>
        </div>

        <div className="row">
          <div className="input">
            <label>Число гостей</label>
            <input
              type="text"
              placeholder="Число гостей"
              value={fields.People}
              onChange={(e) => setFields({ ...fields, People: e.target.value })}
            />
          </div>
          <div className="input">
            <label>Желаемая дата</label>
            <input
              type="date"
              placeholder="Дата мероприятия"
              value={fields.Date}
              onChange={(e) => setFields({ ...fields, Date: e.target.value })}
            />
          </div>
          <div className="input">
            <label>Срок аренды</label>
            <input
              type="text"
              placeholder="Срок аренды в часах"
              value={fields.Hours}
              onChange={(e) => setFields({ ...fields, Hours: e.target.value })}
            />
          </div>
        </div>

        <div className="textArea">
          <label>Дополнительные пожелания</label>
          <textArea placeholder="Комментарии к заказу..."></textArea>
        </div>

        <button className="button" type="Submit">
          Отправить
        </button>
      </form>
    </div>
  );
}

export default Rent;
