import "./Login.css";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!mail.trim() || !password.trim()) {
      return;
    }
    navigate("/");
  };

  return (
    <div className="login">
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="heading">Вход</h1>
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
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn bg-blue-600">
          Войти
        </button>
        <Link to="/registration">Зарегистрироваться</Link>
      </form>
    </div>
  );
}

export default Login;
