import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../Style/SignInForm.css";
import { useSignInAccount } from "../../lib/appwrite/react-query/reactqueryandmutationas"; 
import { useUserContext } from "../../context/AuthContext";
import { AppwriteException } from "appwrite"; // ✅ for proper error typing

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { checkAuthUser, isLoading: userLoading } = useUserContext();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const signIn = useSignInAccount(); // ✅ mutation hook

  async function handleSignInForm() {
    try {
      setIsSubmitting(true);

      await signIn.mutateAsync({ email, password });

      const isLoggedIn = await checkAuthUser();
      console.log("checkAuthUser returned:", isLoggedIn);

      if (isLoggedIn) {
        setEmail("");
        setPassword("");
        navigate("/");
      } else {
        console.error("Login failed");
      }
    } catch (error: unknown) {
      // ✅ safer error handling
      if (error instanceof AppwriteException) {
        console.error("Appwrite error:", error.message);
        alert(error.message);
      } else if (error instanceof Error) {
        console.error("Error signing in:", error.message);
        alert(error.message);
      } else {
        console.error("Unknown error:", error);
        alert("Something went wrong");
      }
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
