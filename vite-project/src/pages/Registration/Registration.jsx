import "./Registration.css";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Registration() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("");

  const [login, setLogin] = useState("");
  const [tel, setTel] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!mail.trim() || !password.trim() || !type || !login.trim()) {
      return;
    }
    navigate("/");
  };

  return (
    <div className="registr">
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="heading">Регистрация</h1>
        <div className="form-control">
          <input
            type="email"
            placeholder="Почта"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
        </div>
        <div className="form-control">
          <input
            type="text"
            placeholder="Логин"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
        </div>
        <div className="form-control">
          <input
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-control">
          <input
            type="tel"
            placeholder="Телефон"
            value={tel}
            onChange={(e) => setTel(e.target.value)}
          />
        </div>
        <button type="submit" className="btn bg-blue-600">
          Зарегистрироваться
        </button>
        <div className="checkBox">
          <label htmlFor="landlord">
            <input
              type="radio"
              name="landlord"
              value="landlord"
              id="landlord"
              checked={type === "landlord"}
              onChange={(e) => setType(e.target.value)}
            />
            Арендодатель
          </label>
          <label htmlFor="customer">
            <input
              type="radio"
              name="customer"
              value="customer"
              id="customer"
              checked={type === "customer"}
              onChange={(e) => setType(e.target.value)}
            />
            Заказчик
          </label>
        </div>
        <Link to="/login">Войти</Link>
      </form>
    </div>
  );
}

export default Registration;
