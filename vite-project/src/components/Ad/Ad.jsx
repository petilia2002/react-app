import React, { useState } from "react";
import "./Ad.css";
import { FaUser } from "react-icons/fa";

const Ad = (props) => {
  return (
    <div className="Card">
      <div className="imgCont">
        <img src={props.image}></img>
      </div>

      <div className="rent-info">
        <div className="rent-about">
          <h2>{props.title}</h2>
          <p className="text">{props.adress}</p>
          <p className="cost">От {props.price} ₽</p>
          <p className="text">Вместимость: {props.apacity} человек</p>
        </div>
        <div className="desc">
          <p>{props.description}</p>
        </div>
      </div>

      <div className="infoLord">
        <div className="image">
          <FaUser></FaUser>
        </div>
        <p className="name">Риелтор</p>
        <h2 className="id">ID 12576975</h2>
        <p className="par">Документы проверены</p>
        <p className="par">
          <a href="">Посмотреть все объекты</a>
        </p>
        <div className="btns">
          <button className="btnBlue">+79871680434254</button>
          <button className="btnWhite">Написать</button>
        </div>
      </div>
    </div>
  );
};

export default Ad;
