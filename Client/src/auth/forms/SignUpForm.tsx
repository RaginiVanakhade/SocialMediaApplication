import React , { useState }  from 'react'
import { createUserAccount } from '../../../src/lib/appwrite/api'


const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  async function handleSignUpForm() {
    try {
      const newUser = await createUserAccount({ email, password, name,  username: name });
      console.log("User created:", newUser);
    } catch (error) {
      console.error("Sign up failed:", error);
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
      <button onClick={handleSignUpForm}>Sign Up</button>
    </div>
  );
};

export default SignUpForm;
