import { Routes, Route } from "react-router-dom";
import SignInForm from "./auth/SignInForm";
import SignUpForm from "./auth/SignUpForm";
// import AuthLayout from "./auth/AuthLayout";
// import RootLayout from "./root/RootLayout";
import Home from "./pages/Home";


function App() {
  return (
    <main>
      <Routes>
            <Route index element={<Home />} />
          <Route path="/sign-in" element={<SignInForm />} />
          <Route path="/sign-up" element={<SignUpForm />} />
      </Routes>
    </main>
  );
}

export default App;
