import React, { useState } from "react";
import { database } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import "../../../public/assets/css/RegisterForm.css";
import '../../../public/assets/images/features-first-icon.png'


function RegisterAndLogin() {
  const [login, setLogin] = useState(false);

  const history = useNavigate();

  const handleSubmit = (e, type) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (type === "signup") {
      createUserWithEmailAndPassword(database, email, password)
        .then((data) => {
          console.log(data, "authData");
          history("/programs");
        })
        .catch((err) => {
          alert(err.code);
          setLogin(true);
        });
    } else {
      signInWithEmailAndPassword(database, email, password)
        .then((data) => {
          console.log(data, "authData");
          history("/programs");
        })
        .catch((err) => {
          alert(err.code);
        });
    }
  };

  const handleReset = () => {
    history("/reset");
  };

  return (
    <div className="App">
        <div className="logo-container">
        <Link to={'/'}>
          <img
            src="../../../public/assets/images/features-first-icon.png"
            alt="Logo"
            className="logo-image"
          />
        </Link>
      </div>
      <div className="registration-login">
        <div
          className={login === false ? "registration-tab activeColor" : "registration-tab pointer"}
          onClick={() => setLogin(false)}
        >
          SignUp
        </div>
        <div
          className={login === true ? "registration-tab activeColor" : "registration-tab pointer"}
          onClick={() => setLogin(true)}
        >
          SignIn
        </div>
      </div>
      <h1>{login ? "SignIn" : "SignUp"}</h1>
      <form onSubmit={(e) => handleSubmit(e, login ? "signin" : "signup")}>
        <input className="input-field" name="email" placeholder="Email" />
        <br />
        <input className="input-field" name="password" type="password" placeholder="Password" />
        <br />
        <p className="forgot-password" onClick={handleReset}>Forgot Password?</p>
        <br />
        <button className="submit-button">{login ? "SignIn" : "SignUp"}</button>
      </form>
    </div>
  );
}
export default RegisterAndLogin;
