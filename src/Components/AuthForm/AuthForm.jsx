import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser, loginUser } from "../../redux/users/userOperations";

const AuthForm = () => {
  const dispatch = useDispatch();
  // Режим форми: true — логін, false — реєстрація
  const [isLoginMode, setIsLoginMode] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value.trim();
    const password = form.password.value.trim();

    if (!email || !password) return;

    if (isLoginMode) {
      dispatch(loginUser({ email, password }));
    } else {
      dispatch(registerUser({ email, password }));
    }

    form.reset();
  };

  return (
    <div className="auth__container">
      <h2>{isLoginMode ? "Sign In" : "Register"}</h2>

      <form onSubmit={handleSubmit} className="auth__form">
        <input type="email" name="email" placeholder="Enter email here" required />
        <input type="password" name="password" placeholder="Enter password here" required />
        <button type="submit">{isLoginMode ? "Login" : "Register"}</button>
      </form>

      <button type="button" className="toggle__auth-btn" onClick={() => setIsLoginMode((prev) => !prev)}>
        {isLoginMode ? "Don't have an account? Register" : "Already have an account? Login"}
      </button>
    </div>
  );
};

export default AuthForm;
