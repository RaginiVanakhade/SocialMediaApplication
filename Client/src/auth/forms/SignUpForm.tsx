import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../../src/Style/SignUpForm.css";
import { createUserAccount, signInAccount } from "../../lib/appwrite/api";
import { useUserContext } from "../../context/AuthContext";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const { checkAuthUser, isLoading: userLoading } = useUserContext();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  async function handleSignUpForm() {
    try {
      setIsSubmitting(true);

      // Create user account
      await createUserAccount({ email, password, name, username: name });

      // Sign in user after signup
      await signInAccount({ email, password });

      // Check auth
      const isLoggedIn = await checkAuthUser();

      if (isLoggedIn) {
        setEmail("");
        setPassword("");
        setName("");
        navigate("/");
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error signing up:", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div>
      <h2>Sign Up</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
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
      <button onClick={handleSignUpForm} disabled={isSubmitting || userLoading}>
        {isSubmitting || userLoading ? "Loading..." : "Sign Up"}
      </button>
    </div>
  );
};

export default SignUpForm;
