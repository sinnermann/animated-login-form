import { useState } from "react";
import "../auth/AuthContainer.css";
import Login from "./Login";
import Register from "./Register";
import Reset from "./Reset";

const AuthContainer = () => {
  const [auth, setAuth] = useState({
    login: true,
    register: false,
    reset: false,
  });
  // const [login, setLogin] = useState(true);
  // const [register, setRegister] = useState(false);
  // const [reset, setReset] = useState(false);

  const handleLogin = () => {
    setAuth({
      login: true,
      register: false,
      reset: false,
    });
    // setLogin(true);
    // setReset(false);
    // setRegister(false);
  };

  const handleRegister = () => {
    setAuth({
      login: false,
      register: true,
      reset: false,
    });
    // setLogin(false);
    // setRegister(true);
    // setReset(false);
  };

  const handleReset = () => {
    setAuth({
      login: false,
      register: false,
      reset: true,
    });
    // setLogin(false);
    // setReset(true);
    // setRegister(false);
  };

  return (
    <section className="--flex-center --100vh">
      <div className="container box">
        {auth.login && <Login onRegister={handleRegister} onReset={handleReset} />}
        {/* This The above means if login is true, then output <Login /> */}
        {auth.register && <Register onLogin={handleLogin} />}
        {/* The above means if register is true, then output <Register /> */}
        {auth.reset && <Reset onLogin={handleLogin} />}
        {/* The above means if reset is true, then output <Reset /> */}
      </div>
    </section>
  );
};

export default AuthContainer;
