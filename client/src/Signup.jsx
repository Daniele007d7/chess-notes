import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import style from "./stylesheets-module/Login.module.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmition(e) {
    fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, password: password }),
    })
      .then((response) => response.json())
      .then((data) => console.log("questi sono i dati del signup ", data));
  }
  return (
    <>
      <h1>{"sign up"}</h1>
      <div id="login-container">
        <form id="login-box">
          <label htmlFor="user-input">username</label>
          <input
            type="text"
            id="user-input"
            className="login-input"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <br />
          <label htmlFor="user-password">password</label>
          <input
            type="password"
            id="user-password"
            className="login-input"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <div id="button-container">
            <Link to="/homepage">
              <button
                onClick={(e) => {
                  handleSubmition(e);
                }}
                id="submit-button"
              >
                submit
              </button>
            </Link>
          </div>

          <Link to="/login">
            <h2> or login </h2>
          </Link>
        </form>
      </div>
    </>
  );
}

export default Login;
