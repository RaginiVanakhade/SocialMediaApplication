import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Style/SignUpForm.css";
import { useCreateUserAccount, useSignInAccount } from "../appwrite/react-query/reactqueryandmutationas"
import { useUserContext } from "../context/AuthContext";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const { checkAuthUser, isLoading: userLoading } = useUserContext();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const createUser = useCreateUserAccount();
  const signIn = useSignInAccount();

  async function handleSignUpForm() {
    try {
      setIsSubmitting(true);

      // Create user account
      await createUser.mutateAsync({ email, password, name, username: name });

      // Sign in user after signup
      await signIn.mutateAsync({ email, password });

      // Check auth
      const isLoggedIn = await checkAuthUser();
      console.log("CheckAuthUser result:", isLoggedIn);

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
