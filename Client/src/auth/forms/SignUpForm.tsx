import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../../src/Style/SignUpForm.css";
import {
  useCreateUserAccount,
  useSignInAccount,
} from "../../lib/appwrite/react-query/reactqueryandmutationas";
import { useUserContext } from "../../context/AuthContext";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const { mutateAsync: createUserAccountMutation, isLoading: isCreatingAccount } =
    useCreateUserAccount();
  const { mutateAsync: createSignInAccountMutation, isLoading: isSignIn } =
    useSignInAccount();
  const { checkAuthUser, isLoading: userLoading } = useUserContext();
  const navigate = useNavigate(); // ✅ Fixed

  async function handleSignUpForm() {
    try {
      // Create user account
      const newUser = await createUserAccountMutation({
        email,
        password,
        name,
        username: name,
      });
      console.log("User created:", newUser);

      if (!newUser) return;

      // Sign in user after signup
      await createSignInAccountMutation({ email, password });

      // Check auth
      const isLoggedIn = await checkAuthUser();

      if (isLoggedIn) {
        // Reset inputs
        setEmail("");
        setPassword("");
        setName("");

        navigate("/"); // redirect to home
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error signing up:", error);
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
      <button onClick={handleSignUpForm} disabled={isCreatingAccount || isSignIn || userLoading}>
        {isCreatingAccount || isSignIn ? "Loading..." : "Sign Up"}
      </button>
    </div>
  );
};

export default SignUpForm;
