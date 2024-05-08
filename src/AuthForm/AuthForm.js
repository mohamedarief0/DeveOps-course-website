import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./AuthForm.css";

function AuthForm({ isLogin }) {
  const navigation = useNavigate();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // Add form submission logic here
    // For example, handle form validation and submit data to backend
    navigation("/home"); // Redirect to home page after successful login/signup
  };

  return (
    <div className="login-container">
      <form style={{width:300}} onSubmit={onSubmitHandler}>
        <h2 className="mb-4">{isLogin ? "Login" : "Sign Up"}</h2>
        <div className="mb-3">
          <input
            type="email"
            placeholder="Email"
            className="form-control"
            id="exampleInputEmail1"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            placeholder="Password"
            className="form-control"
            id="exampleInputPassword1"
            required
          />
        </div>
        {!isLogin && (
          <div className="mb-3">
            <input
              type="password"
              placeholder="Confirm Password"
              className="form-control"
              id="exampleInputConfirmPassword1"
              required
            />
          </div>
        )}
        <button type="submit" className="btn btn-primary w-100 mt-4">
          {isLogin ? "Login" : "Sign Up"}
        </button>
        <p className="mt-3">
          {isLogin ? "New user?" : "Already have an account?"}{" "}
          <Link className="auth-link" to={isLogin ? "/signup" : "/login"}>
            {isLogin ? "Sign Up" : "Login"}
          </Link>
        </p>
      </form>
    </div>
  );
}

export default AuthForm;
