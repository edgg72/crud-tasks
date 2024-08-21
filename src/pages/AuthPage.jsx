import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";


const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="auth-container">
      <div className="toggle-container">
        <button
          onClick={() => setIsLogin(true)}
          className={`${isLogin ? "hidden" : "mb-8 underline font-bold"}`}
        >
          Login instead here
        </button>
        <button
          onClick={() => setIsLogin(false)}
          className={`${!isLogin ? "hidden" : "mb-8 underline font-bold"}`}
        >
          Register instead here
        </button>
      </div>
      <div className="form-container">
        {isLogin ? <Login /> : <Register />}
      </div>
    </div>
  );
};

export default AuthPage;
