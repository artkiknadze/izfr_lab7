import { useState } from "react";
import "./App.css";
import { Auth } from "./components/Auth";
import { AuthCheck } from "./components/AuthCheck";

function App() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="App">
      <Auth setLogin={setLogin} setPassword={setPassword} />
      <AuthCheck login={login} password={password} />
    </div>
  );
}

export default App;
