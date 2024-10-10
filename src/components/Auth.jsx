import { useState } from "react";

export const Auth = ({ setLogin, setPassword }) => {
  const [inputLogin, setInputLogin] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const onPasswordSubmit = () => {
    setLogin(inputLogin);
    setPassword(inputPassword);
    console.log("password submit");
  };

  return (
    <div className="auth_form">
      <input
        type="text"
        value={inputLogin}
        onChange={(e) => setInputLogin(e.target.value)}
        placeholder="Логін"
      />
      <input
        type="password"
        value={inputPassword}
        onChange={(e) => setInputPassword(e.target.value)}
        placeholder="Пароль"
      />
      <input type="submit" onClick={onPasswordSubmit} value="Login" />
    </div>
  );
};
