import React from "react";
import './Login.css'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Login() {
  let navigation = useNavigate();

  const onClickHandler = () => {
    navigation("/home");
  };

  return (
    <>
      <div className="login-container ">
        <form>
          <div class="mb-3">
            <h2 className="mb-4">Login</h2>
            <input
              type="email"
              placeholder="Email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div class="mb-3">
            <input
              type="password"
              placeholder="Password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          
          <button type="submit" class="btn btn-primary w-100 mt-4" onClick={onClickHandler}>
            Login
          </button>
          <p className="mt-3">New user?{" "}<Link className="link-loign" to="/signup">Signup</Link></p>
        </form>
      </div>
    </>
  );
}

export default Login;
