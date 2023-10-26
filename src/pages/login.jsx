import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChanges = (e) => {
    if (e.target.id === "username") {
      setUsername(e.target.value);
    } else if (e.target.id === "password") {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login clicked!");
    console.log("Username: ", username);
    console.log("Password: ", password);
  };

  return (
    <div className="login-page font-inter bg-primary-black text-white w-screen h-screen flex justify-center items-center">
      <div className="login-container flex bg-login-gray content-center flex-col justify-center items-center w-9/12 h-3/5 rounded-lg">
        <h1 className="title text-2xl font-bold tracking-wider">Eclipse</h1>
        <form onSubmit={handleSubmit} className="w-full mt-4">
          <div className="form-inputs flex flex-col justify-center items-center m-6 text-sm">
            <div className="input w-full mb-5">
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Email"
                className="form-input  bg-input-fill rounded-2xl p-2 w-full "
                value={username}
                onChange={handleInputChanges}
              />
            </div>
            <div className="input w-full mb-5">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                className="form-input bg-input-fill rounded-2xl p-2 w-full"
                value={password}
                onChange={handleInputChanges}
              />
            </div>
            <div className="button mt-8 w-full flex justify-center">
              <button
                type="submit"
                className="login-button text-black font-bold bg-slate-200 p-2 rounded-xl w-2/4"
              >
                LOGIN
              </button>
            </div>
          </div>
        </form>
        <div className="mt-2">
          <p className="login-create-account text-sm">
            Don't have an account?
            <Link
              to="/create-account"
              className="create-account-link ml-1 text-blue-600"
            >
              Sign up!
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
