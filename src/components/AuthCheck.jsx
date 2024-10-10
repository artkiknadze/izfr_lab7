export const AuthCheck = ({ login, password }) => {
  return (
    <div>
      {login && password
        ? login === "1" && password === "1"
          ? "Ласкаво просимо"
          : "Помилка!"
        : ""}
    </div>
  );
};
