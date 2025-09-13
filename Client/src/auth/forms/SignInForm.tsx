import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../Style/SignInForm.css";
import { signInAccount } from "../../lib/appwrite/api";
import { useUserContext } from "../../context/AuthContext";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { checkAuthUser, isLoading: userLoading } = useUserContext();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  async function handleSignInForm() {
    try {
      setIsSubmitting(true);

      await signInAccount({ email, password });

      const isLoggedIn = await checkAuthUser();

      if (isLoggedIn) {
        setEmail("");
        setPassword("");
        navigate("/");
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error signing in:", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div>
      <h2>Sign In</h2>
      <br />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleSignInForm} disabled={isSubmitting || userLoading}>
        {isSubmitting || userLoading ? "Loading..." : "Sign In"}
      </button>
      <br />
      <p>
        Don’t have an account? <Link to="/sign-up">Sign Up</Link>
      </p>
    </div>
  );
};

export default SignInForm;
