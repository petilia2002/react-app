import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="content">
        <div className="logotext">
          <a href="">
            <h1>Logo Cian</h1>
          </a>
          <a href="" className="logoref">
            Смотреть все объявления
          </a>
        </div>
        <div className="buttons">
          <button className="btnBlue">+ Разместить объявление</button>
          <button className="btnWhite">Войти</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
